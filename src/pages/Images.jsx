import { List, Image, Card } from "antd";
import { EmptyPage } from "../components/EmptyPage";

export const Images = () => {
  const storedImages = localStorage.getItem("images") || JSON.stringify([]);
  const images = JSON.parse(storedImages);

  if (!images.length) {
    return <EmptyPage description={<span>No Images Uploaded Yet</span>} />;
  }

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      dataSource={images}
      renderItem={(item) => (
        <List.Item>
          <Card
            style={{ overflow: "hidden" }}
            cover={
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={item.content}
                  style={{ maxWidth: 300, height: 200 }}
                />
              </div>
            }
          >
            <Card.Meta title={item.name} />
          </Card>
        </List.Item>
      )}
    />
  );
};
