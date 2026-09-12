import { DEPIX_HEX, BTC_HEX, POOL_ID, state } from "./config.js";

export async function simulate(amtDepix) {
  const amountIn = BigInt(Math.round(amtDepix * 1e8)).toString();

  const simulation = await state.client.simulateSwap({
    poolId: POOL_ID,
    assetInAddress: DEPIX_HEX,
    assetOutAddress: BTC_HEX,
    amountIn,
  });

  return { amountIn, satsOut: Number(simulation.amountOut) };
}

export async function execute({ amountIn, satsOut, slippagePct }) {
  const maxSlippageBps = Math.round(slippagePct * 100);
  const minAmountOut = (
    (BigInt(satsOut) * BigInt(10000 - maxSlippageBps)) / 10000n
  ).toString();

  return state.client.executeSwap({
    poolId: POOL_ID,
    assetInAddress: DEPIX_HEX,
    assetOutAddress: BTC_HEX,
    amountIn,
    maxSlippageBps,
    minAmountOut,
  });
}
