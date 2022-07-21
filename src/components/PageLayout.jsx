import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Grid } from "antd";

import { NavigationSidebar } from "./navigation/NavigationSidebar";
import { PageHeader } from "./PageHeader";
import "./style.css";

export const PageLayout = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const screens = Grid.useBreakpoint();

  const currentPath = pathname.replace("/", "") || "home";
  const showDrawer = !screens.md;

  const onClickMenu = ({ key }) => {
    navigate(key);
  };

  const toggleDrawer = () => {
    setOpenDrawer((open) => !open);
  };

  const closeDrawer = () => setOpenDrawer(false);

  const onClickDrawerMenu = (menuItem) => {
    onClickMenu(menuItem);
    closeDrawer();
  };

  const onBackPageHeader = showDrawer ? toggleDrawer : undefined;

  return (
    <Layout className="layout-container">
      <NavigationSidebar
        openDrawer={openDrawer}
        showDrawer={showDrawer}
        currentPath={currentPath}
        closeDrawer={closeDrawer}
        onClickMenu={onClickMenu}
        onClickDrawerMenu={onClickDrawerMenu}
      />
      <Layout>
        <Layout.Header className="layout-header">
          <PageHeader currentPath={currentPath} onBack={onBackPageHeader} />
        </Layout.Header>
        <Layout.Content className="layout-content">
          <div className="layout-content-background">{children}</div>
        </Layout.Content>
        <Layout.Footer className="layout-footer">
          Blockchain Studio ©2022
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};
