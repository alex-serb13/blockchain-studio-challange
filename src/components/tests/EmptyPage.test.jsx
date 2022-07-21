import { render, screen, waitFor } from "@testing-library/react";
import { EmptyPage } from "../EmptyPage";

// Mock component props
const props = {
  description: "mock_description",
};

describe("EmptyPage test", () => {
  it("renders the EmptyPage", async () => {
    render(<EmptyPage {...props} />);
    const description = screen.getByText("mock_description");

    await waitFor(() => {
      expect(description).toBeInTheDocument();
    });
  });
});
