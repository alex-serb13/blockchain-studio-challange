import { mapSheetToDataSource } from "../mapSheetToDataSource";

describe("mapSheetToDataSource test", () => {
  it("maps the data correctly", () => {
    const data = mapSheetToDataSource("Total\n1\n2\n3\n");
    expect(data).toStrictEqual([
      { total: "1" },
      { total: "2" },
      { total: "3" },
    ]);
  });
});
