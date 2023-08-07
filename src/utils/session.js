export function saveToSession(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getFromSession(key) {
  const savedData = sessionStorage.getItem(key);
  return savedData ? JSON.parse(savedData) : savedData;
}
