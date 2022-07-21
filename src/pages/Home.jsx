import { Row, Col } from "antd";
import { UploadDragger } from "../components/UploadDragger";

export const Home = () => {
  return (
    <Row type="flex" align="middle">
      <Col span={24}>
        <UploadDragger />
      </Col>
    </Row>
  );
};
