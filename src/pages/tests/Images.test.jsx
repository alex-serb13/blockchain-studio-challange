import { render, screen, waitFor } from "@testing-library/react";
import { Images } from "../Images";

const image =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=";

const storageImages = JSON.stringify([
  {
    content: image,
    uploadDate: Date.now(),
    name: "test.png",
    type: "image/png",
  },
  {
    content: image,
    uploadDate: Date.now(),
    name: "test2.png",
    type: "image/png",
  },
]);

describe("Images test", () => {
  it("renders the Images page with no images", async () => {
    render(<Images />);
    const description = screen.getByText("No Images Uploaded Yet");

    await waitFor(() => {
      expect(description).toBeInTheDocument();
    });
  });

  it("renders the Images page with images from localstorage", async () => {
    window.localStorage.setItem("images", storageImages);
    render(<Images />);
    const images = screen.getAllByText("Preview");
    const firstImage = screen.getByText("test.png");
    const secondImage = screen.getByText("test2.png");

    await waitFor(() => {
      expect(images.length).toBe(2);
      expect(firstImage).toBeInTheDocument();
      expect(secondImage).toBeInTheDocument();
    });
  });
});
