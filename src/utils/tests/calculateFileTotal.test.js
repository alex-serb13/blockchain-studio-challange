import { calculateFileTotal } from "../calculateFileTotal";

describe("calculateFiletotal test", () => {
  it("calculates the total correctly", () => {
    const total = calculateFileTotal("Total\n1\n2\n3\n");
    expect(total).toBe(6);
  });
});
