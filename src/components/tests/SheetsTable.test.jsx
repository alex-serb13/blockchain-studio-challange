import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { SheetsTable } from "../tables/SheetsTable";

// Mock component props
const props = {
  sheets: [
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
  ],
  setSelectedSheet: jest.fn(),
  setVisible: jest.fn(),
};

describe("PageLayout test", () => {
  it("renders the PageLayout", async () => {
    render(<SheetsTable {...props} />);
    const firstEntryName = screen.getByText("MOCK_DATA.csv");
    const firstEntryTotal = screen.getByText("6");
    const firstEntryDate = screen.getByText("Thu, 21 Jul 2022 12:47:39 GMT");

    await waitFor(() => {
      expect(firstEntryName).toBeInTheDocument();
      expect(firstEntryTotal).toBeInTheDocument();
      expect(firstEntryDate).toBeInTheDocument();
    });
  });

  it("calls the functions from props when a entry is clicked", async () => {
    render(<SheetsTable {...props} />);
    const secondEntry = screen.getByText("MOCK_DATA_2.csv");
    fireEvent.click(secondEntry);

    await waitFor(() => {
      expect(secondEntry).toBeInTheDocument();
      expect(props.setSelectedSheet).toHaveBeenCalledWith(
        expect.objectContaining({ name: "MOCK_DATA_2.csv", type: "text/csv" })
      );
      expect(props.setVisible).toHaveBeenCalledWith(true);
    });
  });
});
