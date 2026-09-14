import { state } from "./config.js";
import { $, appendLog } from "./dom.js";
import { connect, refreshBalances, getSparkAddress, refreshTransfers, sendBtc, sendDepix } from "./wallet-service.js";
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

function swapDirection() {
  return $("swapDir").value;
}

function isSatsInput() {
  return swapDirection() === "btcToDepix";
}

function swapUnit() {
  return isSatsInput() ? "sats" : "DePix";
}

function updateBtcEquiv() {
  const el = $("btcEquiv");
  const sats = parseFloat($("amountIn").value);
  el.textContent = (isSatsInput() && !isNaN(sats) && sats > 0)
  ? `= ${(sats / 1e8).toFixed(8)} BTC`
  : "";
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
  updateBtcEquiv();
};

$("amountIn").oninput = updateBtcEquiv;

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
    btn.textContent = "Swap concluido";
    await refreshBalances();
  } catch (e) {
    appendLog(lg, "Erro: " + (e?.message || e));
    btn.disabled = false; btn.textContent = "Executar swap";
  }
};

function updateActionMode() {
  const mode = $("actionMode").value;
  const isSwap = mode === "swap";

  $("swapSection").classList.toggle("hidden", !isSwap);
  $("sendSection").classList.toggle("hidden", isSwap);

  $("swapLog").textContent = "";
  $("btnSwap").disabled = true;
  state.lastQuote = null;
  if ($("quoteBox")) $("quoteBox").classList.remove("show");
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

updateActionMode();
showInitialView();
