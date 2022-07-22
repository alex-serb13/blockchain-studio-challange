export const calculateFileTotal = (text) => {
  const contentList = text.split("\n").filter((item) => !isNaN(parseInt(item)));
  const initialValue = 0;
  const total = contentList.reduce(
    (acc, value) => acc + parseInt(value),
    initialValue
  );
  return total;
};
