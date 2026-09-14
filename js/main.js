import { state } from "./config.js";
import { $, appendLog } from "./dom.js";
import {
  connect,
  refreshBalances,
  getSparkAddress,
  getStaticDepositAddress,
  refreshTransfers,
  sendBtc,
  sendDepix,
  getExitFeeQuote,
  executeExit
} from "./wallet-service.js";
import { simulate, execute } from "./swap-service.js";
import { encryptMnemonic, decryptMnemonic } from "./crypto-service.js";
import {
  hasSavedWallet, saveEncryptedWallet,
  loadEncryptedWallet, deleteEncryptedWallet
} from "./storage-service.js";

function showInitialView() {
  if (hasSavedWallet()) {
    $("connectCard").classList.add("hidden");
    $("unlockCard").classList.remove("hidden");
  } else {
    $("connectCard").classList.remove("hidden");
    $("unlockCard").classList.add("hidden");
  }
}

async function enterWallet() {
  $("sparkAddr").textContent = await getSparkAddress();

  try {
    $("depositAddr").textContent = await getStaticDepositAddress();
  } catch (e) {
    $("depositAddr").textContent = "Erro ao gerar endereço";
    console.error(e);
  }

  $("connectCard").classList.add("hidden");
  $("unlockCard").classList.add("hidden");
  $("walletView").classList.remove("hidden");
  await refreshBalances();
}

$("btnConnect").onclick = async () => {
  const m  = $("mnemonic").value.trim();
  const pw = $("pwdNew").value;

  if (!m) return alert("Informe a frase de recuperacao.");
  if (pw.length < 4) return alert("A senha precisa de pelo menos 4 caracteres.");

  const btn = $("btnConnect");
  btn.disabled = true; btn.textContent = "Criptografando e conectando…";
  const lg = $("connectLog"); lg.textContent = "";

  try {
    appendLog(lg, "Criptografando com AES-256-GCM…");
    const payload = await encryptMnemonic(m, pw);
    saveEncryptedWallet(payload);
    appendLog(lg, "Salvo no navegador. Conectando…");

    await connect(m);
    appendLog(lg, "Conectado!");
    $("mnemonic").value = "";
    await enterWallet();
  } catch (e) {
    appendLog(lg, "Erro: " + (e?.message || e));
    btn.disabled = false; btn.textContent = "Salvar e conectar";
  }
};

$("btnUnlock").onclick = async () => {
  const pw = $("pwdUnlock").value;
  if (!pw) return alert("Informe a senha.");

  const btn = $("btnUnlock");
  btn.disabled = true; btn.textContent = "Desbloqueando…";
  const lg = $("unlockLog"); lg.textContent = "";

  try {
    const stored = loadEncryptedWallet();
    const mnemonic = await decryptMnemonic(stored, pw);
    appendLog(lg, "Desbloqueado. Conectando…");

    await connect(mnemonic);
    appendLog(lg, "Conectado!");
    await enterWallet();
  } catch (e) {
    appendLog(lg, "Erro: " + (e?.message || e));
    alert("Senha incorreta ou dados corrompidos.");
    btn.disabled = false; btn.textContent = "Desbloquear carteira";
  }
};

$("btnWipeUnlock").onclick = () => {
  if (!confirm("Apagar a carteira salva neste navegador? A frase de recuperacao sera perdida se voce nao tiver backup.")) return;
  deleteEncryptedWallet();
  location.reload();
};

$("btnRefresh").onclick = refreshBalances;
$("btnRefreshTx").onclick = refreshTransfers;

$("btnCopyAddr").onclick = async () => {
  const addr = $("sparkAddr").textContent;
  const btn = $("btnCopyAddr");
  if (!addr || addr === "—") return;
  try {
    await navigator.clipboard.writeText(addr);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = addr;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  btn.textContent = "Copiado!";
  btn.classList.add("copied");
  setTimeout(() => {
    btn.textContent = "Copiar endereço";
    btn.classList.remove("copied");
  }, 1500);
};

$("btnCopyDeposit").onclick = async () => {
  const addr = $("depositAddr").textContent;
  const btn = $("btnCopyDeposit");
  if (!addr || addr === "—" || addr.startsWith("Erro")) return;
  try {
    await navigator.clipboard.writeText(addr);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = addr;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  btn.textContent = "Copiado!";
  btn.classList.add("copied");
  setTimeout(() => {
    btn.textContent = "Copiar endereço de depósito";
    btn.classList.remove("copied");
  }, 1500);
};

function swapDirection() {
  return $("swapDir").value;
}

function isSatsInput() {
  return swapDirection() === "btcToDepix";
}

function swapUnit() {
  return isSatsInput() ? "sats" : "DePix";
}

$("swapDir").onchange = () => {
  const sats = isSatsInput();
  $("amountLabel").textContent = sats ? "Quantidade de sats" : "Quantidade de DePix";
  $("amountIn").placeholder = sats ? "ex: 5000" : "ex: 1.5";
  $("btnSwap").disabled = true;
  $("btnSwap").textContent = "Executar swap";
  state.lastQuote = null;
  $("quoteBox").classList.remove("show");
  $("swapLog").textContent = "";
};

$("btnQuote").onclick = async () => {
  const direction = swapDirection();
  const amt = parseFloat($("amountIn").value);
  if (!amt || amt <= 0) return alert(`Informe a quantidade de ${swapUnit()}.`);
  if (isSatsInput() && !Number.isInteger(amt)) return alert("Informe a quantidade de sats em numero inteiro.");

  const lg = $("swapLog"); lg.textContent = "";
  $("btnSwap").disabled = true;
  state.lastQuote = null;
  $("quoteBox").classList.remove("show");

  try {
    appendLog(lg, "Simulando swap…");
    const quote = await simulate(direction, amt);
    state.lastQuote = quote;

    $("quoteBox").innerHTML = direction === "depixToBtc"
      ? `Voce recebe aprox. <b>${quote.amountOut.toLocaleString("pt-BR")} sats</b> (` +
        (quote.amountOut / 1e8).toFixed(8) + ` BTC)<br>` +
        `Taxa do pool embutida na cotacao.`
      : `Voce recebe aprox. <b>${(quote.amountOut / 1e8).toLocaleString("pt-BR", { maximumFractionDigits: 8 })} DePix</b><br>` +
        `Taxa do pool embutida na cotacao.`;
    $("quoteBox").classList.add("show");
    $("btnSwap").disabled = false;
    appendLog(lg, "Simulacao OK.");
  } catch (e) {
    const extra = String(e?.message || "").includes("FSAG-1003")
      ? " (valor abaixo do minimo do pool — aumente a quantidade)"
      : "";
    appendLog(lg, "Erro: " + (e?.message || e) + extra);
  }
};

$("btnSwap").onclick = async () => {
  if (!state.lastQuote) return;

  const slipPct = parseFloat($("slippage").value) || 1;
  const btn = $("btnSwap");
  const lg = $("swapLog");

  btn.disabled = true; btn.textContent = "Executando…";

  try {
    appendLog(lg, "Enviando swap para a pool…");
    const result = await execute({ ...state.lastQuote, slippagePct: slipPct });
    appendLog(lg, "Swap executado: " + JSON.stringify(result).slice(0, 400));
    btn.textContent = "Executar swap";
    await refreshBalances();
  } catch (e) {
    appendLog(lg, "Erro: " + (e?.message || e));
    btn.disabled = false; btn.textContent = "Executar swap";
  }
};

function updateActionMode() {
  const mode = $("actionMode").value;

  $("swapSection").classList.toggle("hidden", mode !== "swap");
  $("sendSection").classList.toggle("hidden", mode !== "send");
  $("exitSection").classList.toggle("hidden", mode !== "exit");

  $("swapLog").textContent = "";
  $("btnSwap").disabled = true;
  $("btnExit").disabled = true;
  state.lastQuote = null;
  state.lastExitQuote = null;
  if ($("quoteBox")) $("quoteBox").classList.remove("show");
  if ($("exitQuoteBox")) $("exitQuoteBox").classList.remove("show");
}

$("actionMode").onchange = updateActionMode;

$("sendAsset").onchange = () => {
  const isBtc = $("sendAsset").value === "btc";
  $("sendAmountLabel").textContent = isBtc ? "Quantidade de sats" : "Quantidade de DePix";
  $("sendAmount").placeholder = isBtc ? "ex: 5000" : "ex: 1.5";
};

$("btnSend").onclick = async () => {
  const asset = $("sendAsset").value;
  const amount = parseFloat($("sendAmount").value);
  const to = $("sendTo").value.trim();

  if (!to || !to.startsWith("spark1")) {
    return alert("Informe um endereço Spark válido (começa com spark1)");
  }
  if (!amount || amount <= 0) {
    return alert("Informe uma quantidade válida");
  }
  if (asset === "btc" && !Number.isInteger(amount)) {
    return alert("Quantidade de sats deve ser um número inteiro");
  }

  const btn = $("btnSend");
  const lg = $("swapLog");
  btn.disabled = true;
  btn.textContent = "Enviando…";
  lg.textContent = "";

  try {
    appendLog(lg, `Enviando ${amount} ${asset === "btc" ? "sats" : "DePix"} para ${to.slice(0, 14)}…`);

    let result;
    if (asset === "btc") {
      result = await sendBtc(to, amount);
    } else {
      result = await sendDepix(to, amount);
    }

    appendLog(lg, "Envio concluído com sucesso!");
    console.log(result);

    $("sendAmount").value = "";
    $("sendTo").value = "";

    await refreshBalances();
    await refreshTransfers();
  } catch (e) {
    appendLog(lg, "Erro: " + (e?.message || e));
  } finally {
    btn.disabled = false;
    btn.textContent = "Enviar";
  }
};

state.lastExitQuote = null;

$("btnExitQuote").onclick = async () => {
  const amount = parseInt($("exitAmount").value, 10);
  const address = $("exitAddress").value.trim();
  const speed = $("exitSpeed").value;

  if (!amount || amount <= 0) return alert("Informe a quantidade de sats");
  if (!address || !(address.startsWith("bc1") || address.startsWith("1") || address.startsWith("3"))) {
    return alert("Informe um endereço Bitcoin on-chain válido");
  }

  const lg = $("swapLog");
  lg.textContent = "";
  $("btnExit").disabled = true;
  state.lastExitQuote = null;
  $("exitQuoteBox").classList.remove("show");

  try {
    appendLog(lg, "Consultando taxa de exit…");
    const quote = await getExitFeeQuote(amount, address);
    if (!quote) throw new Error("Não foi possível obter cotação de taxa");

    state.lastExitQuote = quote;

    let fee = 0;
    if (speed === "FAST") {
      fee = (quote.userFeeFast?.originalValue || 0) + (quote.l1BroadcastFeeFast?.originalValue || 0);
    } else if (speed === "MEDIUM") {
      fee = (quote.userFeeMedium?.originalValue || 0) + (quote.l1BroadcastFeeMedium?.originalValue || 0);
    } else {
      fee = (quote.userFeeSlow?.originalValue || 0) + (quote.l1BroadcastFeeSlow?.originalValue || 0);
    }

    // Como deductFee = false, o destinatário recebe o valor cheio
    // e a taxa é paga à parte do saldo da Spark
    $("exitQuoteBox").innerHTML =
      `Destinatário recebe: <b>${amount.toLocaleString("pt-BR")} sats</b><br>` +
      `Taxa (paga do seu saldo): <b>${fee.toLocaleString("pt-BR")} sats</b> (${speed})<br>` +
      `Total debitado da Spark: <b>${(amount + fee).toLocaleString("pt-BR")} sats</b><br>` +
      `Cotação válida até: ${new Date(quote.expiresAt).toLocaleString("pt-BR")}`;
    $("exitQuoteBox").classList.add("show");
    $("btnExit").disabled = false;
    appendLog(lg, "Cotação OK.");
  } catch (e) {
    appendLog(lg, "Erro: " + (e?.message || e));
  }
};

$("btnExit").onclick = async () => {
  if (!state.lastExitQuote) return;

  const amount = parseInt($("exitAmount").value, 10);
  const address = $("exitAddress").value.trim();
  const speed = $("exitSpeed").value;

  const btn = $("btnExit");
  const lg = $("swapLog");
  btn.disabled = true;
  btn.textContent = "Executando Exit…";
  lg.textContent = "";

  try {
    appendLog(lg, `Iniciando exit de ${amount} sats para ${address.slice(0, 12)}…`);

    const result = await executeExit({
      onchainAddress: address,
      amountSats: amount,
      exitSpeed: speed,
      feeQuote: state.lastExitQuote,
      deductFee: true
    });

    appendLog(lg, "Exit iniciado com sucesso!");
    if (result?.id) appendLog(lg, "ID: " + result.id);
    if (result?.coopExitTxid) appendLog(lg, "Txid on-chain: " + result.coopExitTxid);

    $("exitAmount").value = "";
    $("exitAddress").value = "";
    state.lastExitQuote = null;
    $("exitQuoteBox").classList.remove("show");

    await refreshBalances();
    await refreshTransfers();
  } catch (e) {
    appendLog(lg, "Erro: " + (e?.message || e));
  } finally {
    btn.disabled = false;
    btn.textContent = "Executar Exit";
  }
};

$("exitSpeed").onchange = () => {
  state.lastExitQuote = null;
  $("btnExit").disabled = true;
  $("exitQuoteBox").classList.remove("show");
};

updateActionMode();
showInitialView();