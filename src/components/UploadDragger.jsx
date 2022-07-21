import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { customUploadRequest } from "../sources/customUploadRequest";

const props = {
  name: "file",
  showUploadList: false,
  customRequest: customUploadRequest,
};

export const UploadDragger = () => {
  return (
    <Upload.Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">Support for uploading PNG and CSV files</p>
    </Upload.Dragger>
  );
};
