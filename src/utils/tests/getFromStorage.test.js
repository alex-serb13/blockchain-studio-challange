import { getFromStorage } from "../getFromStorage";
import { saveToStorage } from "../saveToStorage";

describe("getFromStorage test", () => {
  it("gets the data from storage", () => {
    saveToStorage("test", "saved_text", {
      name: "some_name",
      type: "some_type",
    });
    const items = getFromStorage("test");

    expect(items[0]).toMatchObject({
      content: "saved_text",
      name: "some_name",
      type: "some_type",
    });
  });
});
