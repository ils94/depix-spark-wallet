const LOCAL = {
  "spark-sdk": "./vendor/spark-sdk/dist/index.browser.js",
  "flashnet-sdk": "./vendor/flashnet-sdk/index.js"
};

const CDN_LIST = {
  "spark-sdk": [
    "https://unpkg.com/@buildonspark/spark-sdk@0.15.0/dist/index.browser.js",
    "https://unpkg.com/@buildonspark/spark-sdk/dist/index.browser.js"
  ],
  "flashnet-sdk": [
    "https://unpkg.com/@flashnet/sdk@0.5.10/dist/esm/index.js",
    "https://cdn.jsdelivr.net/npm/@flashnet/sdk@0.5.10/dist/esm/index.js"
  ]
};

async function importWithRetry(url) {
  try {
    return await import(/* @vite-ignore */ url);
  } catch (first) {
    const bust = url.includes("?") ? `&_retry=${Date.now()}` : `?_retry=${Date.now()}`;
    try {
      return await import(/* @vite-ignore */ url + bust);
    } catch {
      throw first;
    }
  }
}

export async function loadModule(name) {
  const local = LOCAL[name];
  const urls = [];
  if (local) urls.push(local);
  urls.push(...(CDN_LIST[name] || []));
  if (!urls.length) throw new Error(`SDK desconhecido: ${name}`);

  let lastErr;
  for (const url of urls) {
    try {
      const mod = await importWithRetry(url);
      console.log(`[sdk-loader] ${name} OK via ${url}`);
      return mod;
    } catch (e) {
      console.warn(`[sdk-loader] falhou ${url} -> ${e.message}`);
      lastErr = e;
    }
  }
  throw new Error(
    `Nao foi possivel carregar ${name}. Ultimo erro: ${lastErr?.message}. ` +
      `Confira o import map e a pasta js/vendor/.`
  );
}
