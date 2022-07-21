export const validateCSV = (file) => {
  const values = file.trim().split("\n");
  const hasTotalAsHeader = values[0] === "Total";
  const lastItemIsEmptyOrInt =
    values[values.length - 1] === "" ||
    !isNaN(parseInt(values[values.length - 1]));
  const filteredList = values.filter((item) => !isNaN(parseInt(item)));
  values.splice(0, 1);

  return (
    hasTotalAsHeader &&
    lastItemIsEmptyOrInt &&
    filteredList.length === values.length
  );
};
