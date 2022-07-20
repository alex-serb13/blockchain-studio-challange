import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, PageHeader } from "antd";
import {
  UserOutlined,
  FileImageOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

export const NavigationLayout = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentPath = pathname.replace("/", "") || "home";

  const onClick = ({ key }) => {
    navigate(key);
  };

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

  return (
    <Layout style={{ height: "100%" }}>
      <Sider breakpoint="md" collapsedWidth="0">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[currentPath]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <PageHeader
            title={currentPath.toUpperCase()}
            subTitle="This is a subtitle"
          />
        </Header>
        <Content
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
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Blockchain Studio ©2022
        </Footer>
      </Layout>
    </Layout>
  );
};
