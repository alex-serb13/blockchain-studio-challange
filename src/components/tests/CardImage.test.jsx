import { render, screen, waitFor } from "@testing-library/react";
import { CardImage } from "../CardImage";

// Mock component props
const props = {
  item: {
    name: "test.png",
    content: "base64content",
  },
};

describe("CardImage test", () => {
  it("renders the CardImage", async () => {
    const { container } = render(<CardImage {...props} />);
    const name = screen.getByText("test.png");
    const image = container.querySelector("img");

    await waitFor(() => {
      expect(name).toBeInTheDocument();
      expect(image.src).toContain("base64content");
    });
  });
});
