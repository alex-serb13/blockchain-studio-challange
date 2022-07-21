import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { NavigationMenu } from "../navigation/NavigationMenu";

// Mock component props
const props = {
  onClick: jest.fn(),
  defaultSelectedKeys: ["home"],
  theme: "dark",
};

describe("NavigationMenu test", () => {
  it("renders the NavigationMenu", async () => {
    render(<NavigationMenu {...props} />);
    const menuItems = screen.getAllByRole("menuitem");
    const homeItem = screen.getByText("Home");
    const imagesItem = screen.getByText("Images");
    const sheetsItem = screen.getByText("Sheets");
    await waitFor(() => {
      expect(menuItems.length).toBe(3);
      expect(homeItem).toBeInTheDocument();
      expect(imagesItem).toBeInTheDocument();
      expect(sheetsItem).toBeInTheDocument();
      expect(menuItems[0].classList[1]).toBe("ant-menu-item-selected");
    });
  });

  it("calls onClick when a click event is fired on the menu items", async () => {
    render(<NavigationMenu {...props} />);
    const imagesItems = screen.getAllByRole("menuitem")[1];
    fireEvent.click(imagesItems);
    await waitFor(() => {
      expect(props.onClick).toHaveBeenCalledWith(
        expect.objectContaining({ key: "images" })
      );
    });
  });
});
