import { InboxOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";

import { validateCSV } from "../utils/validateCSV";
import { saveToStorage } from "../utils/saveToStorage";

const props = {
  name: "file",
  showUploadList: false,
  customRequest: ({ file, onSuccess, onError }) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      if (file.type === "image/png") {
        saveToStorage("images", reader.result, file);
        message.success(`${file.name} file uploaded successfully.`);
        onSuccess();
      }

      if (file.type === "text/csv") {
        const isFileValid = validateCSV(reader.result);

        if (!isFileValid) {
          message.error(`${file.name} is not a valid CSV format.`);
          return onError();
        }

        saveToStorage("sheets", reader.result, file);
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
