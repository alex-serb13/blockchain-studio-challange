import { render, screen, waitFor } from "@testing-library/react";
import { PageLayout } from "../page/PageLayout";

// Mock the react-router-dom hooks
jest.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "/home" }),
  useNavigate: () => jest.fn(),
}));

// Mock component props
const props = {
  children: "CHILDREN",
};

describe("PageLayout test", () => {
  it("renders the PageLayout", async () => {
    render(<PageLayout {...props} />);
    const header = screen.getByTestId("navigation-logo");
    const content = screen.getByText("CHILDREN");
    const footer = screen.getByText("Blockchain Studio ©2022");

    await waitFor(() => {
      expect(header).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
    });
  });
});
