import { InboxOutlined } from "@ant-design/icons";
import { Upload, Row, Col, message } from "antd";

const validateFile = (file) => {
  const values = file.trim().split("\n");
  const hasTotalAsHeader = values[0] === "Total";
  const lastItemIsEmptyOrInt =
    values[values.length - 1] === "" ||
    !isNaN(parseInt(values[values.length - 1]));
  const filteredList = values.filter(
    (item) => !isNaN(parseInt(item)) && item.length === 1
  );
  values.splice(0, 1);

  return (
    hasTotalAsHeader &&
    lastItemIsEmptyOrInt &&
    filteredList.length === values.length
  );
};

const props = {
  name: "file",
  customRequest: ({ file, onSuccess, onError }) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      if (file.type === "image/png") {
        const storedImages =
          localStorage.getItem("images") || JSON.stringify([]);
        const images = JSON.parse(storedImages);
        localStorage.setItem(
          "images",
          JSON.stringify([
            ...images,
            {
              content: reader.result,
              uploadDate: Date.now(),
              name: file.name,
              type: file.type,
            },
          ])
        );
        message.success(`${file.name} file uploaded successfully.`);
        onSuccess();
      }

      if (file.type === "text/csv") {
        const isFileValid = validateFile(reader.result);
        const storedSheets =
          localStorage.getItem("sheets") || JSON.stringify([]);
        const sheets = JSON.parse(storedSheets);

        if (!isFileValid) {
          message.error(`${file.name} is not a valid CSV format.`);
          return onError();
        }

        localStorage.setItem(
          "sheets",
          JSON.stringify([
            ...sheets,
            {
              content: reader.result,
              uploadDate: Date.now(),
              name: file.name,
              type: file.type,
            },
          ])
        );
        message.success(`${file.name} file uploaded successfully.`);
        onSuccess();
      }
    });

    if (file.type === "image/png") {
      reader.readAsDataURL(file);
    }

    if (file.type === "text/csv") {
      reader.readAsText(file);
    }
  },
};

export const Home = () => {
  return (
    <Row type="flex" align="middle">
      <Col span={24}>
        <Upload.Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for uploading PNG and CSV files
          </p>
        </Upload.Dragger>
      </Col>
    </Row>
  );
};
