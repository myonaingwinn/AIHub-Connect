export function saveToLocalStrg(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStrg(key) {
  const savedData = localStorage.getItem(key);
  return savedData ? JSON.parse(savedData) : savedData;
}
