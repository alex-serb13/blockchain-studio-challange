import { PageHeader as Header } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const pageTitles = {
  home: {
    title: "Home",
    subTitle: "Upload PNG and CSV files",
  },
  images: {
    title: "Images",
    subTitle: "Browse through your images",
  },
  sheets: {
    title: "Sheets",
    subTitle: "Browse through your sheets",
  },
};

export const PageHeader = ({ currentPath, onBack }) => {
  return (
    <Header
      backIcon={<MenuOutlined />}
      title={pageTitles[currentPath].title}
      subTitle={pageTitles[currentPath].subTitle}
      onBack={onBack}
    />
  );
};
