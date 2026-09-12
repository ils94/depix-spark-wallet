const CDN_LIST = {
  "spark-sdk": [
    "https://esm.sh/@buildonspark/spark-sdk?bundle",
    "https://cdn.jsdelivr.net/npm/@buildonspark/spark-sdk/+esm",
    "https://esm.run/@buildonspark/spark-sdk",
    "https://unpkg.com/@buildonspark/spark-sdk?module"
  ],
  "flashnet-sdk": [
    "https://esm.sh/@flashnet/sdk?bundle",
    "https://cdn.jsdelivr.net/npm/@flashnet/sdk/+esm",
    "https://esm.run/@flashnet/sdk",
    "https://unpkg.com/@flashnet/sdk?module"
  ]
};

export async function loadModule(name) {
  const urls = CDN_LIST[name];
  if (!urls) throw new Error(`SDK desconhecido: ${name}`);

  let lastErr;
  for (const url of urls) {
    try {
      const mod = await import(/* @vite-ignore */ url);
      console.log(`[sdk-loader] ${name} OK via ${url}`);
      return mod;
    } catch (e) {
      console.warn(`[sdk-loader] falhou ${url} -> ${e.message}`);
      lastErr = e;
    }
  }
  throw new Error(`Nao foi possivel carregar ${name} em nenhum CDN. Ultimo erro: ${lastErr?.message}`);
}
