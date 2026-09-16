import { loadModule } from "./sdk-loader.js";

let SparkWallet = null;
let FlashnetClient = null;

async function ensureSdks() {
  if (SparkWallet && FlashnetClient) return;
  ({ SparkWallet } = await loadModule("spark-sdk"));
  ({ FlashnetClient } = await loadModule("flashnet-sdk"));
}

import { DEPIX_HEX, DEPIX_BECH32, state } from "./config.js";
import { $ } from "./dom.js";

export const txItemsStore = new Map();

let userRequestsCache = null;
let userRequestsCacheAt = 0;
const USER_REQUESTS_CACHE_MS = 30 * 1000;

let cachedIdentityKeyHex = null;

const TX_INITIAL_SHOW = 10;
const TX_LOAD_MORE_STEP = 10;
const TX_PAGE_SIZE = 30;

let txState = null;

function resetTxState() {
  txState = {
    allItems: [],
    renderedCount: 0,
    btcOffset: 0,
    btcHasMore: true,
    tokenCursor: null,
    tokenHasMore: true,
    loading: false,
  };
}

const TYPE_LABELS = {
  TRANSFER: "Transferência",
  PREIMAGE_SWAP: "Swap",
  UTXO_SWAP: "Swap UTXO",
  COOPERATIVE_EXIT: "Exit",
  MINT: "Mint",
  DEPIX: "DePix",
  LIGHTNING: "Lightning",
};

function prettifyType(type) {
  if (!type) return "—";
  return TYPE_LABELS[type] || type;
}

function normalizeStatus(status) {
  if (!status) return "";
  return String(status)
    .replace(/^TRANSFER_STATUS_/, "")
    .toUpperCase();
}

function statusClass(status) {
  const s = String(status || "").toLowerCase();
  if (s.includes("complet") || s.includes("finaliz") || s.includes("succeed")) return "ok";
  if (s.includes("cancel") || s.includes("fail")) return "err";
  return "pending";
}

function formatDateTime(d) {
  if (!(d instanceof Date)) return "—";

  const date = d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  });

  const time = d.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return `${date} ${time}`;
}

function decodeBase64Utf8(b64) {
  if (!b64 || typeof b64 !== "string") return "";

  try {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);

    const decoded = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
    const printable = decoded.replace(/[\x20-\x7E\u00A0-\uFFFF]/g, "");

    if (printable.length > decoded.length / 3) return b64;

    return decoded;
  } catch {
    return b64;
  }
}

function bytesToHex(bytes) {
  if (!bytes) return "";

  if (typeof bytes === "string") {
    return bytes.toLowerCase();
  }

  const arr = bytes instanceof Uint8Array
    ? Array.from(bytes)
    : Object.values(bytes).map(Number);

  return arr
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toLowerCase();
}

function sameKey(a, b) {
  if (!a || !b) return false;
  return bytesToHex(a) === bytesToHex(b);
}

function uint8ToNumber(bytes) {
  if (!bytes || !(bytes instanceof Uint8Array)) return 0;

  let value = 0n;
  for (const byte of bytes) {
    value = (value << 8n) | BigInt(byte);
  }
  return Number(value);
}

function toAmount(val) {
  if (val == null) return 0;
  if (val instanceof Uint8Array) return uint8ToNumber(val);
  if (typeof val === "bigint") return Number(val);
  if (typeof val === "number") return val;
  if (typeof val === "string") return Number(val) || 0;
  return 0;
}

async function getMyIdentityKey() {
  if (cachedIdentityKeyHex) return cachedIdentityKeyHex;
  try {
    cachedIdentityKeyHex = await state.wallet.getIdentityPublicKey();
  } catch (e) {
    console.warn("Não foi possível obter identity key:", e);
  }
  return cachedIdentityKeyHex;
}

async function loadUserRequestsMap() {
  const now = Date.now();

  if (userRequestsCache && now - userRequestsCacheAt < USER_REQUESTS_CACHE_MS) {
    return userRequestsCache;
  }

  const map = new Map();

  try {
    let cursor = null;
    let guard = 0;

    while (guard++ < 20) {
      const args = { first: 100 };
      if (cursor) args.after = cursor;

      const res = await state.wallet.getUserRequests(args);
      const entities = res?.entities || [];

      for (const ent of entities) {
        const sparkId = ent?.transfer?.sparkId;
        if (sparkId) map.set(sparkId, ent);
      }

      if (!res?.pageInfo?.hasNextPage) break;
      cursor = res.pageInfo.endCursor;
    }
  } catch (e) {
    console.warn("Falha ao carregar user requests:", e);
  }

  userRequestsCache = map;
  userRequestsCacheAt = now;
  return map;
}

export async function getTransferDetails(txId) {
  if (!txId) return { found: false };

  const map = await loadUserRequestsMap();
  const entity = map.get(txId);

  if (entity) {
    return {
      found: true,
      entity,
      memo: decodeBase64Utf8(entity?.invoice?.memo),
    };
  }

  try {
    const tx = await state.wallet.getTransfer(txId);
    return { found: true, entity: null, memo: "", transfer: tx };
  } catch (e) {
    return { found: false, error: e?.message || String(e) };
  }
}

const STATUS_MAP = {
  0: "STARTED",
  1: "SIGNED",
  2: "FINALIZED",
  3: "CANCELLED",
  4: "REVEALED",
};

function buildBtcItems(transfers) {
  return transfers.map((tx) => {
    const itemId = `btc:${tx.id}`;

    return {
      itemId,
      kind: "btc",
      sparkId: tx.id,
      direction: tx.transferDirection,
      amount: Number(tx.totalValue),
      type: tx.type || "TRANSFER",
      status: String(tx.status || "").replace("TRANSFER_STATUS_", ""),
      date: tx.createdTime ? new Date(tx.createdTime) : null,
      memo: "",
    };
  });
}

function buildDepixItems(tokenTxs, myKeyHex) {
  return tokenTxs.map((t) => {
    const tx = t.tokenTransaction || {};
    const status = STATUS_MAP[t.status] ?? String(t.status ?? "");

    const outputs = tx.tokenOutputs || [];
    const inputCase = tx.tokenInputs?.$case || "";

    let ourRaw = 0;
    let otherRaw = 0;

    for (const out of outputs) {
      const amt = toAmount(out.tokenAmount);
      const isOurs = myKeyHex && sameKey(out.ownerPublicKey, myKeyHex);

      if (isOurs) ourRaw += amt;
      else otherRaw += amt;
    }

    const isMint = inputCase === "mintInput" || inputCase === "createInput";

    let direction;
    let amountRaw;

    if (isMint || ourRaw > 0) {
      direction = "INCOMING";
      amountRaw = ourRaw;
    } else if (otherRaw > 0) {
      direction = "OUTGOING";
      amountRaw = otherRaw;
    } else {
      direction = "OUTGOING";
      amountRaw = 0;
    }

    const amount = amountRaw / 1e8;

    const date = tx.clientCreatedTimestamp
      ? new Date(tx.clientCreatedTimestamp)
      : tx.expiryTime
      ? new Date(tx.expiryTime)
      : null;

    const hashHex = bytesToHex(t.tokenTransactionHash);

    const itemId = hashHex
      ? `depix:${hashHex}`
      : `depix:${date?.getTime() || 0}:${amount}`;

    return {
      itemId,
      kind: "depix",
      sparkId: null,
      direction,
      amount,
      type: inputCase === "mintInput" ? "MINT" : "DEPIX",
      status,
      date,
      memo: "",
    };
  });
}

async function fetchTransfersBatch() {
  const btcPromise = (async () => {
    if (!txState.btcHasMore) return [];

    try {
      const res = await state.wallet.getTransfers(
        TX_PAGE_SIZE,
        txState.btcOffset
      );

      const list = res?.transfers || [];

      if (list.length < TX_PAGE_SIZE) txState.btcHasMore = false;

      txState.btcOffset += list.length;

      return list;
    } catch (e) {
      console.warn("Falha ao buscar transfers BTC:", e);
      txState.btcHasMore = false;
      return [];
    }
  })();

  const tokenPromise = (async () => {
    if (!txState.tokenHasMore) return [];

    try {
      const myAddress = await state.wallet.getSparkAddress();

      const params = {
        tokenIdentifiers: [DEPIX_BECH32],
        sparkAddresses: [myAddress],
        pageSize: TX_PAGE_SIZE,
        direction: "NEXT",
      };

      if (txState.tokenCursor) params.cursor = txState.tokenCursor;

      const result =
        await state.wallet.queryTokenTransactionsWithFilters(params);

      const list =
        result?.tokenTransactionsWithStatus ||
        result?.tokenTransactions ||
        [];

      txState.tokenCursor = result?.pageResponse?.nextCursor || null;

      if (!txState.tokenCursor) txState.tokenHasMore = false;

      return list;
    } catch (e) {
      console.warn("Falha ao buscar token txs:", e);
      txState.tokenHasMore = false;
      return [];
    }
  })();

  const [btcList, tokenList] = await Promise.all([btcPromise, tokenPromise]);

  return { btcList, tokenList };
}

function mergeItemsIntoBuffer(newItems) {
  const seen = new Set(txState.allItems.map((it) => it.itemId));

  for (const item of newItems) {
    if (seen.has(item.itemId)) continue;
    seen.add(item.itemId);
    txState.allItems.push(item);
  }

  txState.allItems.sort(
    (a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0)
  );

  txItemsStore.clear();
  for (const item of txState.allItems) {
    txItemsStore.set(item.itemId, item);
  }
}

function renderTxItem(item) {
  const isDepix = item.kind === "depix";
  const isIn = item.direction === "INCOMING";
  const dirClass = isIn ? "tx-dir-in" : "tx-dir-out";
  const arrow = isIn ? "↓" : "↑";
  const sign = isIn ? "+" : "−";

  const amountStr = isDepix
    ? `${item.amount.toLocaleString("pt-BR", {
        maximumFractionDigits: 8,
      })} DePix`
    : `${item.amount.toLocaleString("pt-BR")} sats`;

  const dateStr = formatDateTime(item.date);
  const typeLabel = prettifyType(item.type);
  const statusNorm = normalizeStatus(item.status);
  const statusCls = statusClass(statusNorm);

  return `
  <div class="tx-item">
    <div class="tx-row-top">
      <div class="tx-amount ${dirClass}">
        <span class="arrow">${arrow}</span>
        <span>${sign}${amountStr}</span>
      </div>
      <div class="tx-date">${dateStr}</div>
    </div>
    <div class="tx-row-bottom">
      <div class="tx-tags">
        <span class="tx-tag type">${typeLabel}</span>
        ${
          statusNorm
            ? `<span class="tx-tag status ${statusCls}">${statusNorm}</span>`
            : ""
        }
      </div>
      <button class="tx-detail-btn" data-item-id="${item.itemId}">
        Detalhes
      </button>
    </div>
  </div>
  `;
}

function renderTxList(el) {
  const visible = txState.allItems.slice(0, txState.renderedCount);

  const hasMoreLocal = txState.allItems.length > txState.renderedCount;
  const hasMoreRemote = txState.btcHasMore || txState.tokenHasMore;
  const hasMore = hasMoreLocal || hasMoreRemote;

  const loadMoreBtn = hasMore
    ? `<button type="button" class="tx-load-more" id="btnLoadMoreTx">Carregar mais</button>`
    : "";

  el.innerHTML = visible.map(renderTxItem).join("") + loadMoreBtn;

  const btn = el.querySelector("#btnLoadMoreTx");
  if (btn) btn.onclick = loadMoreTransfers;
}

export async function loadMoreTransfers() {
  if (txState?.loading) return;
  if (!state.wallet || !txState) return;

  txState.loading = true;

  try {
    txState.renderedCount += TX_LOAD_MORE_STEP;

    const remainingLocal = txState.allItems.length - txState.renderedCount;
    const hasMoreRemote = txState.btcHasMore || txState.tokenHasMore;

    if (remainingLocal < TX_LOAD_MORE_STEP && hasMoreRemote) {
      const { btcList, tokenList } = await fetchTransfersBatch();

      const myKeyHex = await getMyIdentityKey();

      const newItems = [
        ...buildBtcItems(btcList),
        ...buildDepixItems(tokenList, myKeyHex),
      ];

      mergeItemsIntoBuffer(newItems);
    }

    renderTxList($("txList"));
  } catch (e) {
    console.error("Erro ao carregar mais transações:", e);
  } finally {
    txState.loading = false;
  }
}

export async function connect(mnemonic) {
  await ensureSdks();

  const { wallet } = await SparkWallet.initialize({
    mnemonicOrSeed: mnemonic,
    options: { network: "MAINNET" }
  });

  const client = new FlashnetClient(wallet);
  await client.initialize();

  state.wallet = wallet;
  state.client = client;

  cachedIdentityKeyHex = null;
  resetTxState();

  wallet.on("transfer:claimed", () => {
    refreshBalances();
    refreshTransfers();
  });

  return wallet;
}

export async function refreshBalances() {
  $("btcBal").textContent = "carregando…";
  $("depixBal").textContent = "carregando…";

  try {
    const { balance, tokenBalances } = await state.wallet.getBalance();

    $("btcBal").textContent = Number(balance).toLocaleString("pt-BR");

    let depix = tokenBalances.get(DEPIX_BECH32);

    if (!depix) depix = tokenBalances.get(DEPIX_HEX);

    if (!depix) {
      for (const [id, info] of tokenBalances) {
        if (id === DEPIX_BECH32 || id === DEPIX_HEX) {
          depix = info;
          break;
        }
      }
    }

    $("depixBal").textContent = depix
      ? (Number(depix.availableToSendBalance) / 1e8)
          .toLocaleString("pt-BR", {
            maximumFractionDigits: 8
          })
      : "0";
  } catch (e) {
    $("btcBal").textContent = "erro";
    $("depixBal").textContent = "erro";
    console.error(e);
  }
}

export async function refreshTransfers() {
  const el = $("txList");

  if (!el || !state.wallet) return;

  el.innerHTML = "<div class='tx-meta'>Carregando…</div>";

  resetTxState();
  txState.loading = true;

  try {
    await getMyIdentityKey();

    const { btcList, tokenList } = await fetchTransfersBatch();

    const myKeyHex = cachedIdentityKeyHex;

    const initialItems = [
      ...buildBtcItems(btcList),
      ...buildDepixItems(tokenList, myKeyHex),
    ];

    mergeItemsIntoBuffer(initialItems);

    txState.renderedCount = Math.min(
      TX_INITIAL_SHOW,
      txState.allItems.length
    );

    renderTxList(el);
  } catch (e) {
    console.error(e);
    el.innerHTML = `<div class="tx-meta">Erro: ${e.message || e}</div>`;
  } finally {
    txState.loading = false;
  }
}

export async function getSparkAddress() {
  return state.wallet.getSparkAddress();
}

export async function getStaticDepositAddress() {
  if (!state.wallet) {
    throw new Error("Carteira não conectada");
  }

  return state.wallet.getStaticDepositAddress();
}

export async function getOnchainDeposits() {
  if (!state.wallet) {
    throw new Error("Carteira não conectada");
  }

  const depositAddress =
    await state.wallet.getStaticDepositAddress();

  const utxos =
    await state.wallet.getUtxosForDepositAddress(
      depositAddress,
      100,
      0,
      true
    );

  return utxos || [];
}

export async function getOnchainDepositQuote(
  txid,
  outputIndex = 0
) {
  if (!state.wallet) {
    throw new Error("Carteira não conectada");
  }

  return state.wallet.getClaimStaticDepositQuote(
    txid,
    outputIndex
  );
}

export async function claimOnchainDeposit(
  txid,
  outputIndex = 0
) {
  if (!state.wallet) {
    throw new Error("Carteira não conectada");
  }

  const quote =
    await state.wallet.getClaimStaticDepositQuote(
      txid,
      outputIndex
    );

  if (!quote) {
    throw new Error(
      "Não foi possível obter a cotação do claim"
    );
  }

  return state.wallet.claimStaticDeposit({
    transactionId: txid,
    creditAmountSats: Number(quote.creditAmountSats),
    sspSignature: quote.signature,
    outputIndex
  });
}

export async function sendBtc(
  receiverSparkAddress,
  amountSats
) {
  if (!state.wallet) {
    throw new Error("Carteira não conectada");
  }

  return state.wallet.transfer({
    receiverSparkAddress,
    amountSats: Number(amountSats)
  });
}

export async function sendDepix(
  receiverSparkAddress,
  amountDepix
) {
  if (!state.wallet) {
    throw new Error("Carteira não conectada");
  }

  const tokenAmount =
    BigInt(Math.round(amountDepix * 1e8));

  return state.wallet.transferTokens({
    tokenIdentifier: DEPIX_BECH32,
    tokenAmount,
    receiverSparkAddress
  });
}

export async function getExitFeeQuote(
  amountSats,
  withdrawalAddress
) {
  if (!state.wallet) {
    throw new Error("Carteira não conectada");
  }

  return state.wallet.getWithdrawalFeeQuote({
    amountSats: Number(amountSats),
    withdrawalAddress
  });
}

export async function executeExit({
  onchainAddress,
  amountSats,
  exitSpeed,
  feeQuote,
  deductFee = false
}) {
  if (!state.wallet) {
    throw new Error("Carteira não conectada");
  }

  let feeAmountSats = 0;

  if (exitSpeed === "FAST") {
    feeAmountSats =
      (feeQuote.userFeeFast?.originalValue || 0) +
      (feeQuote.l1BroadcastFeeFast?.originalValue || 0);
  } else if (exitSpeed === "MEDIUM") {
    feeAmountSats =
      (feeQuote.userFeeMedium?.originalValue || 0) +
      (feeQuote.l1BroadcastFeeMedium?.originalValue || 0);
  } else {
    feeAmountSats =
      (feeQuote.userFeeSlow?.originalValue || 0) +
      (feeQuote.l1BroadcastFeeSlow?.originalValue || 0);
  }

  return state.wallet.withdraw({
    onchainAddress,
    amountSats: Number(amountSats),
    exitSpeed,
    feeQuoteId: feeQuote.id,
    feeAmountSats,
    deductFeeFromWithdrawalAmount: deductFee
  });
}

export async function resolveLightningAddress(
  address,
  amountSats
) {
  const [user, domain] =
    address.trim().toLowerCase().split("@");

  if (!user || !domain) {
    throw new Error(
      "Lightning Address inválido (use user@domain)"
    );
  }

  const lnurlpUrl =
    `https://${domain}/.well-known/lnurlp/` +
    encodeURIComponent(user);

  const infoRes = await fetch(lnurlpUrl);

  if (!infoRes.ok) {
    throw new Error(
      `Não foi possível resolver ${address}`
    );
  }

  const info = await infoRes.json();

  if (info.status === "ERROR") {
    throw new Error(
      info.reason || "Erro no LNURL"
    );
  }

  const amountMsats = amountSats * 1000;

  if (
    info.minSendable &&
    amountMsats < info.minSendable
  ) {
    throw new Error(
      `Valor mínimo: ${Math.ceil(
        info.minSendable / 1000
      )} sats`
    );
  }

  if (
    info.maxSendable &&
    amountMsats > info.maxSendable
  ) {
    throw new Error(
      `Valor máximo: ${Math.floor(
        info.maxSendable / 1000
      )} sats`
    );
  }

  const callback = new URL(info.callback);

  callback.searchParams.set(
    "amount",
    amountMsats.toString()
  );

  const invRes = await fetch(callback.toString());

  if (!invRes.ok) {
    throw new Error(
      "Falha ao obter invoice"
    );
  }

  const inv = await invRes.json();

  if (inv.status === "ERROR") {
    throw new Error(
      inv.reason || "Erro ao gerar invoice"
    );
  }

  if (!inv.pr) {
    throw new Error(
      "Invoice não retornado pelo servidor"
    );
  }

  return inv.pr;
}

export async function payLightning(
  destination,
  amountSats,
  maxFeeSats = 50
) {
  if (!state.wallet) {
    throw new Error("Carteira não conectada");
  }

  let invoice = destination.trim();

  if (
    invoice.includes("@") &&
    !invoice.toLowerCase().startsWith("ln")
  ) {
    invoice =
      await resolveLightningAddress(
        invoice,
        amountSats
      );
  }

  if (
    !invoice.toLowerCase().startsWith("ln")
  ) {
    throw new Error(
      "Destino Lightning inválido (use lnbc... ou user@domain)"
    );
  }

  return state.wallet.payLightningInvoice({
    invoice,
    maxFeeSats: Number(maxFeeSats),
    preferSpark: true
  });
}

export async function getLightningFeeEstimate(
  invoice
) {
  if (!state.wallet) {
    throw new Error("Carteira não conectada");
  }

  return state.wallet.getLightningSendFeeEstimate({
    encodedInvoice: invoice
  });
}

export async function createSparkInvoice(amountSats, memo = "") {
  if (!state.wallet) {
    throw new Error("Carteira não conectada");
  }

  const invoice = await state.wallet.createLightningInvoice({
    amountSats: Number(amountSats),
    memo: memo || undefined,
    includeSparkAddress: true
  });

  return {
    id: invoice.id,
    encoded: invoice.invoice.encodedInvoice
  };
}