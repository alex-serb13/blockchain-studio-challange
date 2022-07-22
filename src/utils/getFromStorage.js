export const getFromStorage = (key) => {
  const storedItems = localStorage.getItem(key) || JSON.stringify([]);
  return JSON.parse(storedItems);
};
