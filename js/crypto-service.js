const PBKDF2_ITERATIONS = 250000;

const enc = new TextEncoder();
const dec = new TextDecoder();

function toB64(bytes) {
  return btoa(String.fromCharCode(...bytes));
}
function fromB64(b64) {
  return Uint8Array.from(atob(b64), c => c.charCodeAt(0));
}

async function deriveKey(password, salt) {
  const baseKey = await crypto.subtle.importKey(
    "raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: PBKDF2_ITERATIONS, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encryptMnemonic(mnemonic, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv   = crypto.getRandomValues(new Uint8Array(12));
  const key  = await deriveKey(password, salt);
  const ct   = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv }, key, enc.encode(mnemonic)
  );
  return {
    v: 1,
    salt: toB64(salt),
    iv:   toB64(iv),
    data: toB64(new Uint8Array(ct))
  };
}

export async function decryptMnemonic(stored, password) {
  const salt = fromB64(stored.salt);
  const iv   = fromB64(stored.iv);
  const data = fromB64(stored.data);
  const key  = await deriveKey(password, salt);
  const pt   = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
  return dec.decode(pt);
}
