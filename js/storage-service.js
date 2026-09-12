const STORAGE_KEY = "depix_spark_wallet_enc";

export function hasSavedWallet() {
  return localStorage.getItem(STORAGE_KEY) !== null;
}

export function saveEncryptedWallet(payload) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function loadEncryptedWallet() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function deleteEncryptedWallet() {
  localStorage.removeItem(STORAGE_KEY);
}
