import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { NavigationSidebar } from "../navigation/NavigationSidebar";

// Mock component props
const props = {
  openDrawer: false,
  showDrawer: false,
  currentPath: ["home"],
  closeDrawer: jest.fn(),
  onClickMenu: jest.fn(),
  onClickDrawerMenu: jest.fn(),
};

describe("NavigationSidebar test", () => {
  it("renders the NavigationSidebar", async () => {
    render(<NavigationSidebar {...props} />);
    const menuItems = screen.getAllByRole("menuitem");
    const logo = screen.getByTestId("navigation-logo");
    await waitFor(() => {
      expect(menuItems.length).toBe(3);
      expect(logo).toBeInTheDocument();
      expect(() => screen.getByText("Blockchain Studio Challenge")).toThrow();
    });
  });

  it("renders the drawer if the showDrawer is true and it's open", async () => {
    render(
      <NavigationSidebar {...props} showDrawer={true} openDrawer={true} />
    );
    const menuItems = screen.getAllByRole("menuitem");
    const logo = screen.getByTestId("navigation-logo");
    const drawerText = screen.getByText("Blockchain Studio Challenge");
    await waitFor(() => {
      expect(menuItems.length).toBe(6);
      expect(logo).toBeInTheDocument();
      expect(drawerText).toBeInTheDocument();
    });
  });

  it("calls closeDrawer when a click event is fired to close the Drawer", async () => {
    render(
      <NavigationSidebar {...props} showDrawer={true} openDrawer={true} />
    );
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(props.closeDrawer).toHaveBeenCalled();
    });
  });
});
