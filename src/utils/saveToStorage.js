export const saveToStorage = (key, item, file) => {
  const storedItems = localStorage.getItem(key) || JSON.stringify([]);
  const items = JSON.parse(storedItems);

  localStorage.setItem(
    key,
    JSON.stringify([
      ...items,
      {
        content: item,
        uploadDate: Date.now(),
        name: file.name,
        type: file.type,
      },
    ])
  );
};
