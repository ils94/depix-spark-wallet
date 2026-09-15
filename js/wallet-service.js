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

  try {
    const { transfers = [] } = await state.wallet.getTransfers(30, 0);

    let tokenTxs = [];

    try {
      const myAddress = await state.wallet.getSparkAddress();

      const tokenResult =
        await state.wallet.queryTokenTransactionsWithFilters({
          tokenIdentifiers: [DEPIX_BECH32],
          sparkAddresses: [myAddress],
          pageSize: 30,
        });

      tokenTxs =
        tokenResult?.tokenTransactionsWithStatus ||
        tokenResult?.tokenTransactions ||
        [];
    } catch (e) {
      console.warn("Falha ao buscar token txs:", e);
    }

    const STATUS_MAP = {
      0: "STARTED",
      1: "SIGNED",
      2: "FINALIZED",
      3: "CANCELLED",
      4: "REVEALED",
    };

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

    const items = [];

    for (const tx of transfers) {
      items.push({
        kind: "btc",
        direction: tx.transferDirection,
        amount: Number(tx.totalValue),
        type: tx.type || "TRANSFER",
        status: String(tx.status || "").replace(
          "TRANSFER_STATUS_",
          ""
        ),
        date: tx.createdTime
          ? new Date(tx.createdTime)
          : null,
      });
    }

    for (const t of tokenTxs) {
      const tx = t.tokenTransaction || {};
      const status = STATUS_MAP[t.status] ?? String(t.status ?? "");

      const outputs = tx.tokenOutputs || [];
      const inputCase = tx.tokenInputs?.$case || "";

      let amountRaw = 0;

      for (const out of outputs) {
        amountRaw += toAmount(out.tokenAmount);
      }

      const amount = amountRaw / 1e8;

      let direction = "OUTGOING";

      if (
        inputCase === "mintInput" ||
        inputCase === "createInput"
      ) {
        direction = "INCOMING";
      } else if (outputs.length > 0) {
        direction = "INCOMING";
      }

      const date = tx.clientCreatedTimestamp
        ? new Date(tx.clientCreatedTimestamp)
        : tx.expiryTime
        ? new Date(tx.expiryTime)
        : null;

      items.push({
        kind: "depix",
        direction,
        amount,
        type:
          inputCase === "mintInput"
            ? "MINT"
            : "DEPIX",
        status,
        date,
      });
    }

    items.sort(
      (a, b) =>
        (b.date?.getTime() || 0) -
        (a.date?.getTime() || 0)
    );

    if (!items.length) {
      el.innerHTML =
        "<div class='tx-meta'>Nenhuma transação encontrada.</div>";
      return;
    }

    el.innerHTML = items
      .map((item) => {
        const isDepix = item.kind === "depix";
        const isIn = item.direction === "INCOMING";
        const dirClass = isIn
          ? "tx-dir-in"
          : "tx-dir-out";

        const amountStr = isDepix
          ? `${isIn ? "+" : "−"}${item.amount.toLocaleString(
              "pt-BR",
              {
                maximumFractionDigits: 8,
              }
            )} DePix`
          : `${isIn ? "+" : "−"}${item.amount.toLocaleString(
              "pt-BR"
            )} sats`;

        const dateStr = item.date
          ? item.date.toLocaleString("pt-BR")
          : "—";

        return `
        <div class="tx-item">
          <div>
            <div class="${dirClass}">${amountStr}</div>
            <div class="tx-meta">${item.type} · ${dateStr}</div>
          </div>
          <div class="tx-meta">${item.status || ""}</div>
        </div>
        `;
      })
      .join("");
  } catch (e) {
    console.error(e);

    el.innerHTML =
      `<div class="tx-meta">Erro: ${e.message || e}</div>`;
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