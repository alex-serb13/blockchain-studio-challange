import { Image, Card } from "antd";

export const CardImage = ({ item }) => {
  return (
    <Card
      className="card-image-card"
      cover={
        <div className="card-image-wrapper">
          <Image className="card-image" src={item.content} />
        </div>
      }
    >
      <Card.Meta title={item.name} />
    </Card>
  );
};
