import { DEPIX_HEX, BTC_HEX, POOL_ID, state } from "./config.js";

const PAIRS = {
  depixToBtc: { assetIn: DEPIX_HEX, assetOut: BTC_HEX },
  btcToDepix: { assetIn: BTC_HEX, assetOut: DEPIX_HEX },
};

export async function simulate(direction, amt) {
  const { assetIn, assetOut } = PAIRS[direction];

  const amountIn = direction === "btcToDepix"
  ? BigInt(Math.round(amt)).toString()
  : BigInt(Math.round(amt * 1e8)).toString();

  const simulation = await state.client.simulateSwap({
    poolId: POOL_ID,
    assetInAddress: assetIn,
    assetOutAddress: assetOut,
    amountIn,
  });

  return { amountIn, amountOut: Number(simulation.amountOut), direction };
}

export async function execute({ amountIn, amountOut, direction, slippagePct }) {
  const { assetIn, assetOut } = PAIRS[direction];

  const maxSlippageBps = Math.round(slippagePct * 100);
  const minAmountOut = (
    (BigInt(amountOut) * BigInt(10000 - maxSlippageBps)) / 10000n
  ).toString();

  return state.client.executeSwap({
    poolId: POOL_ID,
    assetInAddress: assetIn,
    assetOutAddress: assetOut,
    amountIn,
    maxSlippageBps,
    minAmountOut,
  });
}
