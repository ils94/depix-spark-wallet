const CACHE_MS = 60 * 1000;
const BASE = "https://data-api.binance.vision/api/v3/ticker/price";

function createCachedFetcher(symbol) {
	let cached = null;
	let cachedAt = 0;
	let inflight = null;

	async function doFetch() {
		const res = await fetch(`${BASE}?symbol=${symbol}`);

		if (!res.ok) {
			throw new Error(`Binance respondeu ${res.status}`);
		}

		const data = await res.json();
		const price = parseFloat(data.price);

		if (!Number.isFinite(price) || price <= 0) {
			throw new Error("Preço inválido retornado pela Binance");
		}

		return price;
	}

	return async function fetchPrice() {
		const now = Date.now();

		if (cached != null && now - cachedAt < CACHE_MS) {
			return cached;
		}

		if (inflight) return inflight;

		inflight = doFetch()
			.then((price) => {
				cached = price;
				cachedAt = Date.now();
				return price;
			})
			.finally(() => {
				inflight = null;
			});

		return inflight;
	};
}

export const fetchBtcBrl = createCachedFetcher("BTCBRL");
export const fetchBtcUsdt = createCachedFetcher("BTCUSDT");

export function formatBrl(value) {
	return "R$ " + Number(value).toLocaleString("pt-BR", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
}

export function formatUsd(value) {
	return "$ " + Number(value).toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
}

export function computeSpread(direction, amountIn, amountOut, btcBrl) {
	if (direction === "depixToBtc") {
		const poolPrice = amountIn / amountOut;
		const refPrice = btcBrl / 1e8;
		const spreadPct = (poolPrice / refPrice - 1) * 100;
		const refOut = (amountIn / btcBrl) * 1e8;

		return { spreadPct, poolPrice, refPrice, refOut, outUnit: "sats" };
	}

	const depixOut = amountOut / 1e8;
	const poolPrice = amountIn / depixOut;
	const refPrice = 1e8 / btcBrl;
	const spreadPct = (poolPrice / refPrice - 1) * 100;
	const refOut = (amountIn * btcBrl) / 1e8;

	return { spreadPct, poolPrice, refPrice, refOut, outUnit: "DePix" };
}