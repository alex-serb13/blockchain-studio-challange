import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, PageHeader, Grid, Drawer } from "antd";
import {
  UserOutlined,
  FileImageOutlined,
  FileTextOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Logo from "./assets/logo.png";

const { useBreakpoint } = Grid;

export const NavigationLayout = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentPath = pathname.replace("/", "") || "home";
  const screens = useBreakpoint();

  const onClick = ({ key }) => {
    navigate(key);
  };

  const toggleDrawer = () => {
    setOpenDrawer((open) => !open);
  };

  const closeDrawer = () => setOpenDrawer(false);

  const menuItems = [
    {
      key: "home",
      icon: <UserOutlined />,
      label: `Home`,
      onClick,
    },
    {
      key: "images",
      icon: <FileImageOutlined />,
      label: `Images`,
      onClick,
    },
    {
      key: "sheets",
      icon: <FileTextOutlined />,
      label: `Sheets`,
      onClick,
    },
  ];

  const showDrawer = !screens.md;
  const onBackPageHeader = showDrawer ? toggleDrawer : undefined;

  return (
    <Layout style={{ height: "100%" }}>
      <Layout.Sider
        width={250}
        breakpoint="md"
        collapsedWidth="0"
        trigger={null}
        collapsed={showDrawer}
      >
        <div className="logo">
          <img src={Logo} width={200} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[currentPath]}
          items={menuItems}
        />
      </Layout.Sider>
      {showDrawer && (
        <Drawer
          title="Blockchain Studio Challenge"
          placement="left"
          onClose={closeDrawer}
          visible={openDrawer}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[currentPath]}
            items={menuItems}
            onClick={closeDrawer}
          />
        </Drawer>
      )}
      <Layout>
        <Layout.Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <PageHeader
            backIcon={<MenuOutlined />}
            title={currentPath.toUpperCase()}
            subTitle="This is a subtitle"
            onBack={onBackPageHeader}
          />
        </Layout.Header>
        <Layout.Content
          style={{
            margin: "24px 16px 0",
            height: "100%",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
              overflow: "scroll",
            }}
          >
            {children}
          </div>
        </Layout.Content>
        <Layout.Footer
          style={{
            textAlign: "center",
          }}
        >
          Blockchain Studio ©2022
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};
