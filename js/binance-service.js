const BTC_BRL_CACHE_MS = 60 * 1000;
const BINANCE_URL =
	"https://data-api.binance.vision/api/v3/ticker/price?symbol=BTCBRL";

let cachedBtcBrl = null;
let cachedBtcBrlAt = 0;
let inflight = null;

async function fetchBtcBrlRaw() {
	const res = await fetch(BINANCE_URL);

	if (!res.ok) {
		throw new Error(
			`Binance respondeu ${res.status}`
		);
	}

	const data = await res.json();
	const price = parseFloat(data.price);

	if (!Number.isFinite(price) || price <= 0) {
		throw new Error(
			"Preço inválido retornado pela Binance"
		);
	}

	return price;
}

export async function fetchBtcBrl() {
	const now = Date.now();

	if (
		cachedBtcBrl != null &&
		now - cachedBtcBrlAt < BTC_BRL_CACHE_MS
	) {
		return cachedBtcBrl;
	}

	if (inflight) {
		return inflight;
	}

	inflight = fetchBtcBrlRaw()
		.then((price) => {
			cachedBtcBrl = price;
			cachedBtcBrlAt = Date.now();
			return price;
		})
		.finally(() => {
			inflight = null;
		});

	return inflight;
}

export function clearBtcBrlCache() {
	cachedBtcBrl = null;
	cachedBtcBrlAt = 0;
	inflight = null;
}

export function formatBrl(value) {
	return "R$ " + Number(value).toLocaleString(
		"pt-BR",
		{
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}
	);
}

export function computeSpread(direction, amountIn, amountOut) {
	if (direction === "depixToBtc") {
		const poolPrice = amountIn / amountOut;
		const refPrice = cachedBtcBrl / 1e8;

		const spreadPct = (poolPrice / refPrice - 1) * 100;

		const refOut = (amountIn / cachedBtcBrl) * 1e8;

		return { spreadPct, poolPrice, refPrice, refOut, outUnit: "sats" };
	} else {
		const depixOut = amountOut / 1e8;

		const poolPrice = amountIn / depixOut;
		const refPrice = 1e8 / cachedBtcBrl;

		const spreadPct = (poolPrice / refPrice - 1) * 100;

		const refOut = (amountIn * cachedBtcBrl) / 1e8;

		return { spreadPct, poolPrice, refPrice, refOut, outUnit: "DePix" };
	}
}