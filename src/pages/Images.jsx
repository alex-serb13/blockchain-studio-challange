import { List } from "antd";
import { CardImage } from "../components/CardImage";
import { EmptyPage } from "../components/EmptyPage";

const listBreakpoints = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 4,
};

export const Images = () => {
  const storedImages = localStorage.getItem("images") || JSON.stringify([]);
  const images = JSON.parse(storedImages);

  if (!images.length) {
    return <EmptyPage description="No Images Uploaded Yet" />;
  }

  return (
    <List
      grid={listBreakpoints}
      dataSource={images}
      renderItem={(item) => (
        <List.Item>
          <CardImage item={item} />
        </List.Item>
      )}
    />
  );
};
