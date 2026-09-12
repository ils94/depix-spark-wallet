export const $ = id => document.getElementById(id);

export function appendLog(el, msg) {
  el.textContent += msg + "\n";
  el.scrollTop = el.scrollHeight;
}
