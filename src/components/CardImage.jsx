import { Image, Card } from "antd";

export const CardImage = ({ item }) => {
  return (
    <Card
      style={{ overflow: "hidden" }}
      cover={
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image src={item.content} style={{ height: 200 }} />
        </div>
      }
    >
      <Card.Meta title={item.name} />
    </Card>
  );
};
