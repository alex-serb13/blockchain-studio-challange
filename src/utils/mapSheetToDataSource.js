export const mapSheetToDataSource = (sheet) => {
  const data = sheet
    ?.split("\n")
    ?.filter((item) => !isNaN(parseInt(item)))
    ?.map((item) => ({ total: item }));

  return data;
};
