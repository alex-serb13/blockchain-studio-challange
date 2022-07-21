import { Menu } from "antd";
import {
  HomeOutlined,
  FileImageOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const menuItems = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: `Home`,
  },
  {
    key: "images",
    icon: <FileImageOutlined />,
    label: `Images`,
  },
  {
    key: "sheets",
    icon: <FileTextOutlined />,
    label: `Sheets`,
  },
];

export const NavigationMenu = ({ onClick, defaultSelectedKeys, theme }) => {
  return (
    <Menu
      mode="inline"
      theme={theme}
      items={menuItems}
      onClick={onClick}
      defaultSelectedKeys={defaultSelectedKeys}
    />
  );
};
