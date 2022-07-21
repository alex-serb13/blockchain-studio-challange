import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { PageHeader } from "../page/PageHeader";

// Mock component props
const props = {
  currentPath: "home",
  onBack: jest.fn(),
};

describe("PageHeader test", () => {
  it("renders the PageHeader", async () => {
    render(<PageHeader {...props} />);
    const drawerButton = screen.getByRole("button");
    const title = screen.getByText("Home");
    const subtitle = screen.getByText("Upload PNG and CSV files");

    await waitFor(() => {
      expect(drawerButton).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(subtitle).toBeInTheDocument();
    });
  });

  it("calls onBack when a click event is fired on the drawer icon", async () => {
    render(<PageHeader {...props} />);
    const drawerButton = screen.getByRole("button");
    fireEvent.click(drawerButton);
    await waitFor(() => {
      expect(props.onBack).toHaveBeenCalled();
    });
  });
});
