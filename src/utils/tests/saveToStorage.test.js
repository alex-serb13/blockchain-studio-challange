import { saveToStorage } from "../saveToStorage";

describe("saveToStorage test", () => {
  it("saves correctly to localstorage when it's empty", () => {
    saveToStorage("test", "saved_text", {
      name: "some_name",
      type: "some_type",
    });
    const storedItems = localStorage.getItem("test") || JSON.stringify([]);
    const items = JSON.parse(storedItems);
    expect(items[0]).toMatchObject({
      content: "saved_text",
      name: "some_name",
      type: "some_type",
    });
  });

  it("saves correctly to localstorage when it's not empty", () => {
    window.localStorage.clear();
    saveToStorage("test", "saved_text1", {
      name: "some_name1",
      type: "some_type1",
    });
    saveToStorage("test", "saved_text2", {
      name: "some_name2",
      type: "some_type2",
    });
    const storedItems = localStorage.getItem("test") || JSON.stringify([]);
    const items = JSON.parse(storedItems);
    expect(items[1]).toMatchObject({
      content: "saved_text2",
      name: "some_name2",
      type: "some_type2",
    });
  });
});
