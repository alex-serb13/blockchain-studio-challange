import { Empty, Row, Col } from "antd";

export const EmptyPage = ({ description }) => {
  return (
    <Row type="flex" align="middle" style={{ height: "inherit" }}>
      <Col span={12} offset={6}>
        <Empty description={<span>{description}</span>} />
      </Col>
    </Row>
  );
};
