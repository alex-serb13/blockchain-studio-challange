import { Row, Col, Typography } from "antd";
import { UploadDragger } from "../components/UploadDragger";

const { Title, Paragraph, Text } = Typography;

export const Home = () => {
  return (
    <Row className="home-container" gutter={16}>
      <Col className="home-introduction-container" flex="1 1 300px">
        <Typography>
          <Title>Introduction</Title>
          <Paragraph>Only supported formats are PNG and CSV files</Paragraph>
          <Paragraph>
            When uploading CSV files the format will be checked so{" "}
            <Text strong>
              any other format (more than one column, column with another name
              than 'Total', rows with values other than numbers) will be
              rejected
            </Text>
            .
          </Paragraph>
        </Typography>
      </Col>
      <Col className="home-upload-container" flex="1 1 300px">
        <UploadDragger />
      </Col>
    </Row>
  );
};
