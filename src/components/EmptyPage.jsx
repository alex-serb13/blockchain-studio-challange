import { Empty, Row } from "antd";

export const EmptyPage = ({ description }) => {
  return (
    <Row className="empty-page-container">
      <Empty description={<span>{description}</span>} />
    </Row>
  );
};
