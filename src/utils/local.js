export function getLocal(name) {
  const asset = localStorage.getItem(name);
  if (asset) return JSON.parse(asset);
}
export function setLocal(name, asset) {
  localStorage.setItem(name, JSON.stringify(asset));
}
