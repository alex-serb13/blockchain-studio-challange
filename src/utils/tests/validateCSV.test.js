import { validateCSV } from "../validateCSV";

describe("validateCSV test", () => {
  it("validates a correct CSV string", () => {
    const isValid = validateCSV("Total\n1\n2\n3\n");
    expect(isValid).toBe(true);
  });

  it("invalidates a CSV with a different header than Total", () => {
    const isValid = validateCSV("Tota\n1\n2\n3\n");
    expect(isValid).toBe(false);
  });

  it("invalidates a CSV with a different value than a number", () => {
    const isValid = validateCSV("Tota\n1\nc\n3\n");
    expect(isValid).toBe(false);
  });

  it("invalidates a CSV with characters different than numbers on a line", () => {
    const isValid = validateCSV("Tota\n1\n2,\n3\n");
    expect(isValid).toBe(false);
  });

  it("invalidates a CSV with an unwanted space", () => {
    const isValid = validateCSV("Tota\n1\n2\n\n3\n");
    expect(isValid).toBe(false);
  });
});
