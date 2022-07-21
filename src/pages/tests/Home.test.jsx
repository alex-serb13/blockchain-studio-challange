import { render, screen, waitFor } from "@testing-library/react";
import { Home } from "../Home";

describe("Home test", () => {
  it("renders the Home page", async () => {
    render(<Home />);
    const uploadInput = screen.getByRole("button").firstChild;
    const descriptionTitle = screen.getByText("Introduction");
    const descriptionFragment = screen.getByText(
      "Only supported formats are PNG and CSV files"
    );

    await waitFor(() => {
      expect(uploadInput).toBeInTheDocument();
      expect(descriptionTitle).toBeInTheDocument();
      expect(descriptionFragment).toBeInTheDocument();
    });
  });
});
