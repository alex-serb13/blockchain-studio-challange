import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Sheets } from "../Sheets";

const storageSheets = JSON.stringify([
  {
    content: "Total\n1\n2\n\n3",
    name: "MOCK_DATA.csv",
    type: "text/csv",
    uploadDate: 1658407659455,
  },
  {
    content: "Total\n1\n2\n\n3\n4",
    name: "MOCK_DATA_2.csv",
    type: "text/csv",
    uploadDate: 1658407666800,
  },
]);

describe("Sheets test", () => {
  it("renders the Sheets page with no sheets", async () => {
    render(<Sheets />);
    const description = screen.getByText("No Sheets Uploaded Yet");

    await waitFor(() => {
      expect(description).toBeInTheDocument();
    });
  });

  it("renders the Sheets page with info from localstorage", async () => {
    window.localStorage.setItem("sheets", storageSheets);
    render(<Sheets />);
    const firstEntryName = screen.getByText("MOCK_DATA.csv");
    const firstEntryTotal = screen.getByText("6");

    const secondEntryName = screen.getByText("MOCK_DATA_2.csv");
    const secondEntryTotal = screen.getByText("10");

    await waitFor(() => {
      expect(firstEntryName).toBeInTheDocument();
      expect(firstEntryTotal).toBeInTheDocument();

      expect(secondEntryName).toBeInTheDocument();
      expect(secondEntryTotal).toBeInTheDocument();
    });
  });

  it("opens the modal when you click on an entry in the sheets table", async () => {
    window.localStorage.setItem("sheets", storageSheets);
    render(<Sheets />);
    const firstRow = screen.getByText("MOCK_DATA.csv");
    fireEvent.click(firstRow);

    const dialog = screen.getByRole("dialog");
    const dialogTitle = screen.getByText("MOCK_DATA.csv - Thu, 21 Jul 2022 12:47:39 GMT");

    await waitFor(() => {
        expect(dialog).toBeInTheDocument();
        expect(dialogTitle).toBeInTheDocument();
    });
  });
});
