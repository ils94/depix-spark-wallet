import { state } from "./config.js";
import { $, appendLog } from "./dom.js";
import { connect, refreshBalances, getSparkAddress, refreshTransfers } from "./wallet-service.js";
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

$("btnQuote").onclick = async () => {
  const amt = parseFloat($("amountIn").value);
  if (!amt || amt <= 0) return alert("Informe a quantidade de DePix.");

  const lg = $("swapLog"); lg.textContent = "";
  $("btnSwap").disabled = true;
  state.lastQuote = null;
  $("quoteBox").classList.remove("show");

  try {
    appendLog(lg, "Simulando swap…");
    const quote = await simulate(amt);
    state.lastQuote = quote;

    $("quoteBox").innerHTML =
    `Voce recebe aprox. <b>${quote.satsOut.toLocaleString("pt-BR")} sats</b> (` +
    (quote.satsOut / 1e8).toFixed(8) + ` BTC)<br>` +
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
  } catch (e) {
    appendLog(lg, "Erro: " + (e?.message || e));
    btn.disabled = false; btn.textContent = "Executar swap";
  }
};

showInitialView();
