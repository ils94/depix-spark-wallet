import {
	state
} from "./config.js";
import {
	$,
	appendLog
} from "./dom.js";

import {
	connect,
	refreshBalances,
	getSparkAddress,
	getStaticDepositAddress,
	getOnchainDeposits,
	getOnchainDepositQuote,
	claimOnchainDeposit,
	refreshTransfers,
	sendBtc,
	sendDepix,
	getExitFeeQuote,
	executeExit,
	payLightning,
	createSparkInvoice
} from "./wallet-service.js";

import {
	simulate,
	execute
} from "./swap-service.js";

import {
	encryptMnemonic,
	decryptMnemonic
} from "./crypto-service.js";

import {
	hasSavedWallet,
	saveEncryptedWallet,
	loadEncryptedWallet,
	deleteEncryptedWallet
} from "./storage-service.js";

let bolt11LibPromise = null;

async function loadBolt11Lib() {
    if (!bolt11LibPromise) {
        bolt11LibPromise = import(
            "https://esm.sh/light-bolt11-decoder@3.2.0?bundle"
        ).then((m) => m.decode);
    }
    return bolt11LibPromise;
}

async function decodeLightningInvoice(invoice) {
    const decode = await loadBolt11Lib();
    return decode(invoice);
}

let lnbcPendingSend = null;

function escapeHtml(s) {
	return String(s).replace(/[&<>"']/g, (c) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;"
	}[c]));
}

function fmtSats(n) {
	return Number(n).toLocaleString("pt-BR") + " sats";
}

function fmtDateUnix(sec) {
	return new Date(sec * 1000).toLocaleString("pt-BR");
}

function renderLnbcInfo(decoded) {
    // A light-bolt11-decoder retorna um array `sections`
    const sections = decoded.sections || [];
    const getSection = (name) =>
        sections.find((s) => s.name === name);

    // -------- valor --------
    const amountSection = getSection("amount");
    let sats = null;
    if (amountSection && amountSection.value) {
        const msat = Number(amountSection.value);
        if (!Number.isNaN(msat)) {
            sats = Math.floor(msat / 1000);
        }
    }

    // -------- descrição --------
    const descSection = getSection("description");
    const desc = descSection?.value || "(sem descrição)";

    // -------- payment hash --------
    const payHashSection = getSection("payment_hash");
    const payHash = payHashSection?.value || "";

    // -------- timestamp --------
    const tsSection = getSection("timestamp");
    const timestamp = tsSection?.value || null;

    // -------- expiry --------
    const expirySection = getSection("expiry");
    const expiry = expirySection?.value || 3600;
    const expiresAt = timestamp ? timestamp + expiry : null;

    // -------- rede --------
    const networkSection = getSection("coin_network");
    const network = networkSection?.value?.bech32 || "—";

    const rows = [
        `<div class="row-item amount">
            <span class="k">Valor</span>
            <span class="v">${
                sats != null
                    ? fmtSats(sats)
                    : "aberto (sem valor)"
            }</span>
        </div>`,
        `<div class="row-item">
            <span class="k">Descrição</span>
            <span class="v">${escapeHtml(desc)}</span>
        </div>`,
        `<div class="row-item">
            <span class="k">Rede</span>
            <span class="v">${escapeHtml(network)}</span>
        </div>`,
        `<div class="row-item">
            <span class="k">Criada em</span>
            <span class="v">${
                timestamp
                    ? fmtDateUnix(timestamp)
                    : "—"
            }</span>
        </div>`,
        `<div class="row-item">
            <span class="k">Expira em</span>
            <span class="v">${
                expiresAt
                    ? fmtDateUnix(expiresAt)
                    : "—"
            }</span>
        </div>`,
        `<div class="row-item">
            <span class="k">Payment hash</span>
            <span class="v">${escapeHtml(payHash) || "—"}</span>
        </div>`
    ];

    $("lnbcInfo").innerHTML = rows.join("");
}

function openLnbcModal(invoice, decoded) {
	lnbcPendingSend = { invoice, decoded };

	$("lnbcLog").textContent = "";
	$("lnbcConfirmCheck").checked = false;
	$("lnbcConfirm").disabled = true;
	$("lnbcConfirm").textContent = "Enviar";

	renderLnbcInfo(decoded);

	$("lnbcModal").classList.remove("hidden");
}

function closeLnbcModal() {
	lnbcPendingSend = null;
	$("lnbcModal").classList.add("hidden");
}

$("lnbcModalClose").onclick = closeLnbcModal;
$("lnbcCancel").onclick = closeLnbcModal;

$("lnbcModal").onclick = (e) => {
	if (e.target === $("lnbcModal")) {
		closeLnbcModal();
	}
};

$("lnbcConfirmCheck").onchange = () => {
	$("lnbcConfirm").disabled =
		!$("lnbcConfirmCheck").checked;
};

$("lnbcConfirm").onclick = async () => {
	if (!lnbcPendingSend) return;

	const { invoice } = lnbcPendingSend;

	const btn = $("lnbcConfirm");
	const lg = $("lnbcLog");

	btn.disabled = true;
	btn.textContent = "Enviando…";

	lg.textContent = "Enviando pagamento Lightning…";

	try {
		const result = await payLightning(
			invoice,
			null,
			100
		);

		lg.textContent =
			"Pagamento enviado com sucesso!";

		console.log("Lightning payment:", result);

		closeLnbcModal();

		await refreshBalances();
		await refreshTransfers();
	} catch (e) {
		lg.textContent =
			"Erro: " + (e?.message || e);

		btn.disabled = false;
		btn.textContent = "Enviar";
	}
};

let onchainDepositTimer = null;
let onchainDepositBusy = false;

const depositQuotes = new Map();

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
	$("sparkAddr").textContent =
		await getSparkAddress();

	try {
		$("depositAddr").textContent =
			await getStaticDepositAddress();
	} catch (e) {
		$("depositAddr").textContent =
			"Erro ao gerar endereço";

		console.error(e);
	}

	$("connectCard").classList.add("hidden");
	$("unlockCard").classList.add("hidden");
	$("walletView").classList.remove("hidden");

	await refreshBalances();
	await refreshOnchainDeposits();
	await refreshTransfers();
}

$("btnConnect").onclick = async () => {
	const m = $("mnemonic").value.trim();
	const pw = $("pwdNew").value;

	if (!m) {
		return alert(
			"Informe a frase de recuperacao."
		);
	}

	if (pw.length < 4) {
		return alert(
			"A senha precisa de pelo menos 4 caracteres."
		);
	}

	const btn = $("btnConnect");

	btn.disabled = true;
	btn.textContent =
		"Criptografando e conectando…";

	const lg = $("connectLog");
	lg.textContent = "";

	try {
		appendLog(
			lg,
			"Criptografando com AES-256-GCM…"
		);

		const payload =
			await encryptMnemonic(m, pw);

		saveEncryptedWallet(payload);

		appendLog(
			lg,
			"Salvo no navegador. Conectando…"
		);

		await connect(m);

		appendLog(lg, "Conectado!");

		$("mnemonic").value = "";

		await enterWallet();
	} catch (e) {
		appendLog(
			lg,
			"Erro: " + (e?.message || e)
		);

		btn.disabled = false;
		btn.textContent = "Salvar e conectar";
	}
};

$("btnUnlock").onclick = async () => {
	const pw = $("pwdUnlock").value;

	if (!pw) {
		return alert("Informe a senha.");
	}

	const btn = $("btnUnlock");

	btn.disabled = true;
	btn.textContent = "Desbloqueando…";

	const lg = $("unlockLog");
	lg.textContent = "";

	try {
		const stored = loadEncryptedWallet();

		const mnemonic = await decryptMnemonic(
			stored,
			pw
		);

		appendLog(
			lg,
			"Desbloqueado. Conectando…"
		);

		await connect(mnemonic);

		appendLog(lg, "Conectado!");

		await enterWallet();
	} catch (e) {
		appendLog(
			lg,
			"Erro: " + (e?.message || e)
		);

		alert(
			"Senha incorreta ou dados corrompidos."
		);

		btn.disabled = false;
		btn.textContent = "Desbloquear carteira";
	}
};

$("btnWipeUnlock").onclick = () => {
	if (
		!confirm(
			"Apagar a carteira salva neste navegador? A frase de recuperacao sera perdida se voce nao tiver backup."
		)
	) {
		return;
	}

	deleteEncryptedWallet();
	location.reload();
};

$("btnRefresh").onclick = async () => {
	await refreshBalances();
	await refreshOnchainDeposits();
};

$("btnRefreshTx").onclick = refreshTransfers;

$("btnCopyAddr").onclick = async () => {
	const addr = $("sparkAddr").textContent;
	const btn = $("btnCopyAddr");

	if (!addr || addr === "—") {
		return;
	}

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

	if (
		!addr ||
		addr === "—" ||
		addr.startsWith("Erro")
	) {
		return;
	}

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

function updateClaimsBadge(count) {
	const badge = $("claimsBadge");
	if (!badge) return;

	if (count > 0) {
		badge.textContent =
			count > 99 ? "99+" : String(count);
		badge.classList.remove("hidden");
	} else {
		badge.classList.add("hidden");
	}
}

async function refreshOnchainDeposits() {
	const container = $("onchainDeposits");
	const card = $("onchainClaimsCard");
	const emptyCard = $("noClaimsCard");

	if (
		!container ||
		!card ||
		!state.wallet ||
		onchainDepositBusy
	) {
		return;
	}

	onchainDepositBusy = true;

	try {
		const deposits = await getOnchainDeposits();

		if (!deposits.length) {
			card.classList.add("hidden");
			if (emptyCard) {
				emptyCard.classList.remove("hidden");
			}
			container.innerHTML = "";
			updateClaimsBadge(0);
			return;
		}

		card.classList.remove("hidden");
		if (emptyCard) {
			emptyCard.classList.add("hidden");
		}
		updateClaimsBadge(deposits.length);

		const cards = [];

		for (const deposit of deposits) {
			const txid = deposit.txid;

			const outputIndex = Number(
				deposit.vout ?? 0
			);

			const key = `${txid}:${outputIndex}`;

			let quote = depositQuotes.get(key);

			if (!quote) {
				try {
					quote = await getOnchainDepositQuote(
						txid,
						outputIndex
					);

					depositQuotes.set(key, quote);
				} catch (e) {
					console.warn(
						"Não foi possível obter quote:",
						e
					);
				}
			}

			const amount =
				quote?.creditAmountSats != null
					? Number(quote.creditAmountSats)
					: null;

			const fee =
				amount != null
					? Number(
						quote?.depositAmountSats ?? 0
					) - amount
					: null;

			cards.push(`
				<div class="onchain-deposit">
					<div class="onchain-deposit-header">
						<span class="onchain-deposit-title">
							Depósito BTC
						</span>

						<span class="onchain-deposit-status">
							Confirmado
						</span>
					</div>

					<div class="onchain-deposit-row">
						<span>Valor</span>
						<strong>
							${
								amount != null
									? amount.toLocaleString("pt-BR") + " sats"
									: "consultando…"
							}
						</strong>
					</div>

					${
						fee != null && fee > 0
							? `
								<div class="onchain-deposit-row">
									<span>Taxa estimada</span>
									<strong>
										${fee.toLocaleString("pt-BR")} sats
									</strong>
								</div>
							`
							: ""
					}

					<div class="onchain-deposit-tx">
						${txid}
					</div>

					<button
						class="btn-primary btn-claim"
						data-txid="${txid}"
						data-vout="${outputIndex}"
						${quote ? "" : "disabled"}
					>
						Reivindicar BTC
					</button>

					<div class="claim-log"></div>
				</div>
			`);
		}

		container.innerHTML = cards.join("");

		container
			.querySelectorAll(".btn-claim")
			.forEach((btn) => {
				btn.onclick = async () => {
					const txid = btn.dataset.txid;
					const outputIndex = Number(
						btn.dataset.vout
					);

					await executeOnchainClaim(
						btn,
						txid,
						outputIndex
					);
				};
			});
	} catch (e) {
		console.error(
			"Erro ao consultar depósitos on-chain:",
			e
		);

		card.classList.remove("hidden");
		if (emptyCard) {
			emptyCard.classList.add("hidden");
		}

		container.innerHTML = `
			<div class="tx-meta">
				Erro ao consultar depósitos:
				${e?.message || e}
			</div>
		`;
	} finally {
		onchainDepositBusy = false;
	}
}

async function executeOnchainClaim(
	btn,
	txid,
	outputIndex
) {
	const originalText = btn.textContent;

	const card = btn.closest(".onchain-deposit");

	const log = card?.querySelector(".claim-log");

	btn.disabled = true;
	btn.textContent = "Reivindicando…";

	if (log) {
		log.textContent = "Preparando claim…";
	}

	try {
		if (log) {
			log.textContent = "Obtendo cotação…";
		}

		const quote = await getOnchainDepositQuote(
			txid,
			outputIndex
		);

		if (!quote) {
			throw new Error(
				"Não foi possível obter a cotação do claim"
			);
		}

		if (log) {
			log.textContent =
				"Enviando claim para o Spark…";
		}

		const result = await claimOnchainDeposit(
			txid,
			outputIndex
		);

		console.log("Claim result:", result);

		if (log) {
			log.textContent =
				"BTC reivindicado com sucesso!";
		}

		btn.textContent = "Reivindicado";
		btn.classList.add("copied");

		await refreshBalances();
		await refreshTransfers();
		await refreshOnchainDeposits();
	} catch (e) {
		console.error("Erro no claim:", e);

		if (log) {
			log.textContent =
				"Erro: " + (e?.message || e);
		}

		btn.disabled = false;
		btn.textContent = originalText;
	}
}

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

	$("amountLabel").textContent = sats
		? "Quantidade de sats"
		: "Quantidade de DePix";

	$("amountIn").placeholder = sats
		? "ex: 5000"
		: "ex: 1.5";

	$("btnSwap").disabled = true;
	$("btnSwap").textContent = "Executar swap";

	state.lastQuote = null;

	$("quoteBox").classList.remove("show");

	$("swapLog").textContent = "";
};

$("btnQuote").onclick = async () => {
	const direction = swapDirection();

	const amt = parseFloat($("amountIn").value);

	if (!amt || amt <= 0) {
		return alert(
			`Informe a quantidade de ${swapUnit()}.`
		);
	}

	if (isSatsInput() && !Number.isInteger(amt)) {
		return alert(
			"Informe a quantidade de sats em numero inteiro."
		);
	}

	const lg = $("swapLog");
	lg.textContent = "";

	$("btnSwap").disabled = true;

	state.lastQuote = null;

	$("quoteBox").classList.remove("show");

	try {
		appendLog(lg, "Simulando swap…");

		const quote = await simulate(direction, amt);

		state.lastQuote = quote;

		$("quoteBox").innerHTML =
			direction === "depixToBtc"
				? `Voce recebe aprox. <b>${quote.amountOut.toLocaleString(
						"pt-BR"
					)} sats</b> (` +
					(quote.amountOut / 1e8).toFixed(8) +
					` BTC)<br>` +
					`Taxa do pool embutida na cotacao.`
				: `Voce recebe aprox. <b>${(
						quote.amountOut / 1e8
					).toLocaleString("pt-BR", {
						maximumFractionDigits: 8
					})} DePix</b><br>` +
					`Taxa do pool embutida na cotacao.`;

		$("quoteBox").classList.add("show");

		$("btnSwap").disabled = false;

		appendLog(lg, "Simulacao OK.");
	} catch (e) {
		const extra = String(
			e?.message || ""
		).includes("FSAG-1003")
			? " (valor abaixo do minimo do pool — aumente a quantidade)"
			: "";

		appendLog(
			lg,
			"Erro: " + (e?.message || e) + extra
		);
	}
};

$("btnSwap").onclick = async () => {
	if (!state.lastQuote) {
		return;
	}

	const slipPct =
		parseFloat($("slippage").value) || 1;

	const btn = $("btnSwap");
	const lg = $("swapLog");

	btn.disabled = true;
	btn.textContent = "Executando…";

	try {
		appendLog(
			lg,
			"Enviando swap para a pool…"
		);

		const result = await execute({
			...state.lastQuote,
			slippagePct: slipPct
		});

		appendLog(
			lg,
			"Swap executado: " +
				JSON.stringify(result).slice(0, 400)
		);

		btn.textContent = "Executar swap";

		await refreshBalances();
	} catch (e) {
		appendLog(
			lg,
			"Erro: " + (e?.message || e)
		);

		btn.disabled = false;
		btn.textContent = "Executar swap";
	}
};

function updateActionMode() {
	const mode = $("actionMode").value;

	$("swapSection").classList.toggle(
		"hidden",
		mode !== "swap"
	);

	$("sendSection").classList.toggle(
		"hidden",
		mode !== "send"
	);

	$("receiveSection").classList.toggle(
		"hidden",
		mode !== "receive"
	);

	$("exitSection").classList.toggle(
		"hidden",
		mode !== "exit"
	);

	$("swapLog").textContent = "";

	$("btnSwap").disabled = true;
	$("btnExit").disabled = true;

	state.lastQuote = null;
	state.lastExitQuote = null;

	if ($("quoteBox")) {
		$("quoteBox").classList.remove("show");
	}

	if ($("exitQuoteBox")) {
		$("exitQuoteBox").classList.remove("show");
	}
}

$("actionMode").onchange = updateActionMode;

$("sendAsset").onchange = () => {
	const isBtc =
		$("sendAsset").value === "btc";

	$("sendAmountLabel").textContent = isBtc
		? "Quantidade de sats (só p/ Lightning Address)"
		: "Quantidade de DePix";

	$("sendAmount").placeholder = isBtc
		? "ex: 5000 (opcional p/ lnbc)"
		: "ex: 1.5";

	if (isBtc) {
		$("sendTo").placeholder =
			"spark1... | lnbc... | user@domain";
	} else {
		$("sendTo").placeholder = "spark1...";
	}
};

$("btnSend").onclick = async () => {
	const asset = $("sendAsset").value;

	const amount = parseFloat($("sendAmount").value);

	const to = $("sendTo").value.trim();

	if (!to) {
		return alert("Informe o destino");
	}

	const isBolt11 = /^ln(bc|tb|sb)/i.test(to);

	const isLnAddress =
		!isBolt11 && to.includes("@");

	if (
		!isBolt11 &&
		(!amount || amount <= 0)
	) {
		return alert("Informe uma quantidade válida");
	}

	if (
		asset === "btc" &&
		!isBolt11 &&
		!Number.isInteger(amount)
	) {
		return alert(
			"Quantidade de sats deve ser um número inteiro"
		);
	}

	const btn = $("btnSend");
	const lg = $("swapLog");

	btn.disabled = true;
	btn.textContent = "Enviando…";

	lg.textContent = "";

	try {
		let result;

		if (asset === "depix") {
			if (!to.startsWith("spark1")) {
				throw new Error(
					"DePix só pode ser enviado para endereço Spark (spark1...)"
				);
			}

			appendLog(
				lg,
				`Enviando ${amount} DePix para ${to.slice(
					0,
					14
				)}…`
			);

			result = await sendDepix(to, amount);
		} else {
			if (to.startsWith("spark1")) {
				appendLog(
					lg,
					`Enviando ${amount} sats (Spark) para ${to.slice(
						0,
						14
					)}…`
				);

				result = await sendBtc(to, amount);
			} else if (isBolt11) {
				appendLog(
					lg,
					"Decodificando invoice Lightning…"
				);

				let decoded;
				try {
					decoded =
						await decodeLightningInvoice(to);
				} catch (e) {
					throw new Error(
						"Não foi possível decodificar a invoice: " +
							(e?.message || e)
					);
				}

				openLnbcModal(to, decoded);

				return;
			} else if (isLnAddress) {
				appendLog(
					lg,
					`Enviando via Lightning para ${to.slice(
						0,
						24
					)}…`
				);

				result = await payLightning(
					to,
					amount,
					100
				);
			} else {
				throw new Error(
					"Destino inválido. Use spark1..., lnbc... ou user@domain"
				);
			}
		}

		appendLog(lg, "Envio concluído com sucesso!");

		console.log(result);

		$("sendAmount").value = "";
		$("sendTo").value = "";

		await refreshBalances();
		await refreshTransfers();
	} catch (e) {
		appendLog(
			lg,
			"Erro: " + (e?.message || e)
		);
	} finally {
		btn.disabled = false;
		btn.textContent = "Enviar";
	}
};

state.lastExitQuote = null;

$("btnExitQuote").onclick = async () => {
	const amount = parseInt(
		$("exitAmount").value,
		10
	);

	const address = $("exitAddress").value.trim();

	const speed = $("exitSpeed").value;

	if (!amount || amount <= 0) {
		return alert("Informe a quantidade de sats");
	}

	if (
		!address ||
		!(
			address.startsWith("bc1") ||
			address.startsWith("1") ||
			address.startsWith("3")
		)
	) {
		return alert(
			"Informe um endereço Bitcoin on-chain válido"
		);
	}

	const lg = $("swapLog");

	lg.textContent = "";

	$("btnExit").disabled = true;

	state.lastExitQuote = null;

	$("exitQuoteBox").classList.remove("show");

	try {
		appendLog(lg, "Consultando taxa de exit…");

		const quote = await getExitFeeQuote(
			amount,
			address
		);

		if (!quote) {
			throw new Error(
				"Não foi possível obter cotação de taxa"
			);
		}

		state.lastExitQuote = quote;

		let fee = 0;

		if (speed === "FAST") {
			fee =
				(quote.userFeeFast?.originalValue || 0) +
				(quote.l1BroadcastFeeFast?.originalValue || 0);
		} else if (speed === "MEDIUM") {
			fee =
				(quote.userFeeMedium?.originalValue || 0) +
				(quote.l1BroadcastFeeMedium?.originalValue || 0);
		} else {
			fee =
				(quote.userFeeSlow?.originalValue || 0) +
				(quote.l1BroadcastFeeSlow?.originalValue || 0);
		}

		$("exitQuoteBox").innerHTML =
			`Destinatário recebe: <b>${amount.toLocaleString(
				"pt-BR"
			)} sats</b><br>` +
			`Taxa (paga do seu saldo): <b>${fee.toLocaleString(
				"pt-BR"
			)} sats</b> (${speed})<br>` +
			`Total debitado da Spark: <b>${(
				amount + fee
			).toLocaleString("pt-BR")} sats</b><br>` +
			`Cotação válida até: ${new Date(
				quote.expiresAt
			).toLocaleString("pt-BR")}`;

		$("exitQuoteBox").classList.add("show");

		$("btnExit").disabled = false;

		appendLog(lg, "Cotação OK.");
	} catch (e) {
		appendLog(
			lg,
			"Erro: " + (e?.message || e)
		);
	}
};

$("btnExit").onclick = async () => {
	if (!state.lastExitQuote) {
		return;
	}

	const amount = parseInt(
		$("exitAmount").value,
		10
	);

	const address = $("exitAddress").value.trim();

	const speed = $("exitSpeed").value;

	const btn = $("btnExit");
	const lg = $("swapLog");

	btn.disabled = true;
	btn.textContent = "Executando Exit…";

	lg.textContent = "";

	try {
		appendLog(
			lg,
			`Iniciando exit de ${amount} sats para ${address.slice(
				0,
				12
			)}…`
		);

		const result = await executeExit({
			onchainAddress: address,
			amountSats: amount,
			exitSpeed: speed,
			feeQuote: state.lastExitQuote,
			deductFee: false
		});

		appendLog(
			lg,
			"Exit iniciado com sucesso!"
		);

		if (result?.id) {
			appendLog(lg, "ID: " + result.id);
		}

		if (result?.coopExitTxid) {
			appendLog(
				lg,
				"Txid on-chain: " + result.coopExitTxid
			);
		}

		$("exitAmount").value = "";
		$("exitAddress").value = "";

		state.lastExitQuote = null;

		$("exitQuoteBox").classList.remove("show");

		await refreshBalances();
		await refreshTransfers();
	} catch (e) {
		appendLog(
			lg,
			"Erro: " + (e?.message || e)
		);
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

$("btnCheckClaims").onclick = async () => {
	const btn = $("btnCheckClaims");

	btn.disabled = true;
	btn.textContent = "Verificando…";

	try {
		await refreshOnchainDeposits();
	} finally {
		btn.disabled = false;
		btn.textContent = "Verificar claims";
	}
};

function switchTab(tabName) {
	document
		.querySelectorAll(".tab-btn")
		.forEach((b) => {
			b.classList.toggle(
				"active",
				b.dataset.tab === tabName
			);
		});

	document
		.querySelectorAll(".tab-panel")
		.forEach((p) => {
			const targetId =
				"tabPanel" +
				tabName.charAt(0).toUpperCase() +
				tabName.slice(1);

			p.classList.toggle(
				"active",
				p.id === targetId
			);
		});
}

function initTabs() {
	document
		.querySelectorAll(".tab-btn")
		.forEach((btn) => {
			btn.addEventListener("click", () =>
				switchTab(btn.dataset.tab)
			);
		});
}

async function renderQr(canvasId, text) {
	const canvas = $(canvasId);

	if (!canvas || typeof QRCode === "undefined") {
		throw new Error(
			"Lib de QR Code não carregada. " +
				"Adicione o script qrcode no index.html."
		);
	}

	canvas
		.getContext("2d")
		.clearRect(0, 0, canvas.width, canvas.height);

	await QRCode.toCanvas(canvas, text, {
		width: 240,
		margin: 2
	});
}

$("btnCreateInvoice").onclick = async () => {
	const amount = parseInt(
		$("receiveAmount").value,
		10
	);

	const memo = $("receiveMemo").value.trim();

	if (!amount || amount <= 0) {
		return alert(
			"Informe a quantidade de sats da invoice"
		);
	}

	const btn = $("btnCreateInvoice");

	btn.disabled = true;
	btn.textContent = "Gerando…";

	try {
		const { id, encoded } =
			await createSparkInvoice(amount, memo);

		$("invoiceString").value = encoded;

		await renderQr("invoiceQr", encoded);

		$("invoiceBox").classList.remove("hidden");

		console.log("Invoice criada:", id);
	} catch (e) {
		alert("Erro: " + (e?.message || e));
	} finally {
		btn.disabled = false;
		btn.textContent = "Gerar Spark Invoice";
	}
};

$("btnCopyInvoice").onclick = async () => {
	const inv = $("invoiceString").value;

	if (!inv) {
		return;
	}

	await navigator.clipboard.writeText(inv);

	$("btnCopyInvoice").textContent = "Copiado!";

	setTimeout(() => {
		$("btnCopyInvoice").textContent =
			"Copiar invoice";
	}, 1500);
};

$("btnNewInvoice").onclick = () => {
	$("invoiceBox").classList.add("hidden");

	$("invoiceString").value = "";
	$("receiveAmount").value = "";
	$("receiveMemo").value = "";
};

function openQrModal(label, addr) {
	if (
		!addr ||
		addr === "—" ||
		addr.startsWith("Erro")
	) {
		return;
	}

	$("qrModalLabel").textContent = label;
	$("qrModalAddr").textContent = addr;

	renderQr("qrModalCanvas", addr);

	$("qrModal").classList.remove("hidden");
}

$("btnQrSpark").onclick = () => {
	openQrModal(
		"Seu endereço Spark",
		$("sparkAddr").textContent.trim()
	);
};

$("btnQrDeposit").onclick = () => {
	openQrModal(
		"Depositar BTC on-chain",
		$("depositAddr").textContent.trim()
	);
};

$("btnQrModalClose").onclick = () => {
	$("qrModal").classList.add("hidden");
};

$("qrModal").onclick = (e) => {
	if (e.target === $("qrModal")) {
		$("qrModal").classList.add("hidden");
	}
};

let html5QrcodeLibPromise = null;

let activeScanner = null;
let scannerBusy = false;
let scannerStopRequested = false;

async function loadHtml5QrcodeLib() {
	if (!html5QrcodeLibPromise) {
		html5QrcodeLibPromise = new Promise((resolve, reject) => {
			if (typeof window.Html5Qrcode !== "undefined") {
				return resolve(window.Html5Qrcode);
			}
			const s = document.createElement("script");
			s.src = "https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js";
			s.async = true;
			s.onload = () => resolve(window.Html5Qrcode);
			s.onerror = () => reject(new Error("Falha ao baixar html5-qrcode"));
			document.head.appendChild(s);
		});
	}
	return html5QrcodeLibPromise;
}

function normalizeQrPayload(raw) {
	if (!raw) return "";
	let s = String(raw).trim();
	const lower = s.toLowerCase();

	if (lower.startsWith("bitcoin:")) {
		s = s.slice("bitcoin:".length);
		const qIdx = s.indexOf("?");
		if (qIdx !== -1) s = s.slice(0, qIdx);
		return s.trim();
	}

	if (lower.startsWith("lightning:")) {
		s = s.slice("lightning:".length).trim();
		const qIdx = s.indexOf("?");
		if (qIdx !== -1) s = s.slice(0, qIdx);
		return s.trim();
	}

	if (lower.startsWith("lnurl:")) {
		return s.slice("lnurl:".length).trim();
	}

	return s;
}

function handleQrScanned(decodedText) {
	const cleaned = normalizeQrPayload(decodedText);
	if (!cleaned) {
		$("scanLog").textContent = "QR vazio ou inválido.";
		return;
	}
	$("sendTo").value = cleaned;
	closeScanModal();
}

async function safeStopAndClear(instance) {
	if (!instance) return;
	try {
		const state = instance.getState?.();
		if (state === 1 || state === 2) {
			await instance.stop();
		}
	} catch (e) {
		console.warn("stop() falhou:", e);
	}
	try {
		instance.clear();
	} catch (e) {
		console.warn("clear() falhou:", e);
	}
}

function closeScanModal() {
	$("scanModal").classList.add("hidden");

	scannerStopRequested = true;

	const inst = activeScanner;
	activeScanner = null;

	if (inst) {
		safeStopAndClear(inst).finally(() => {
			scannerBusy = false;
		});
	} else {
		scannerBusy = false;
	}
}

async function openScanModal() {
	if (scannerBusy) {
		console.warn("Scanner já está em transição, ignorando clique");
		return;
	}

	$("scanLog").textContent = "Iniciando câmera…";
	$("scanModal").classList.remove("hidden");

	scannerBusy = true;
	scannerStopRequested = false;

	try {
		const Html5Qrcode = await loadHtml5QrcodeLib();

		if (scannerStopRequested) {
			scannerBusy = false;
			return;
		}

		const instance = new Html5Qrcode("scanReader", { verbose: false });
		activeScanner = instance;

		const config = {
			fps: 15,
			qrbox: (vw, vh) => {
				const minEdge = Math.min(vw, vh);
				const size = Math.floor(minEdge * 0.75);
				return { width: size, height: size };
			},
			experimentalFeatures: {
				useBarCodeDetectorIfSupported: true
			}
		};

		const onScan = (text) => handleQrScanned(text);
		const onErr = () => { /* frame sem QR */ };

		try {
			await instance.start(
				{ facingMode: { ideal: "environment" } },
				config,
				onScan,
				onErr
			);
		} catch (e) {
			if (scannerStopRequested) {
				await safeStopAndClear(instance);
				activeScanner = null;
				scannerBusy = false;
				return;
			}

			console.warn("environment falhou, tentando deviceId…", e);

			try { instance.clear(); } catch {}

			const cameras = await Html5Qrcode.getCameras();
			if (!cameras || !cameras.length) {
				throw new Error("Nenhuma câmera encontrada");
			}

			const back = cameras.find((c) =>
				/back|rear|traseira|environment/i.test(c.label || "")
			);
			const chosen = back || cameras[0];

			const instance2 = new Html5Qrcode("scanReader", { verbose: false });
			activeScanner = instance2;

			await instance2.start(
				{ deviceId: { exact: chosen.id } },
				config,
				onScan,
				onErr
			);
		}

		$("scanLog").textContent = "Procurando QR Code…";

		if (scannerStopRequested) {
			await safeStopAndClear(activeScanner);
			activeScanner = null;
		}
	} catch (e) {
		console.error("Erro ao abrir câmera:", e);
		$("scanLog").textContent =
			"Não foi possível acessar a câmera: " +
			(e?.message || e);

		if (activeScanner) {
			await safeStopAndClear(activeScanner);
			activeScanner = null;
		}
	} finally {
		scannerBusy = false;
	}
}

$("btnScanQr").onclick = openScanModal;
$("scanModalClose").onclick = closeScanModal;
$("scanModal").onclick = (e) => {
	if (e.target === $("scanModal")) closeScanModal();
};

$("scanFromFile").onclick = () => {
	$("scanFileInput").click();
};

$("scanFileInput").onchange = async (e) => {
	const file = e.target.files?.[0];
	if (!file) return;

	try {
		const Html5Qrcode = await loadHtml5QrcodeLib();

		const tmp = new Html5Qrcode("scanReader", { verbose: false });
		const text = await tmp.scanFile(file, /* showImage */ false);

		try { tmp.clear(); } catch {}

		handleQrScanned(text);
	} catch (err) {
		console.error("Falha ao ler imagem:", err);
		$("scanLog").textContent =
			"Não foi possível ler o QR da imagem.";
	} finally {
		e.target.value = "";
	}
};

initTabs();
updateActionMode();
showInitialView();