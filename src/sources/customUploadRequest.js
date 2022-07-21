import { message } from "antd";
import { validateCSV } from "../utils/validateCSV";
import { saveToStorage } from "../utils/saveToStorage";

const allowdFormats = ["image/png", "text/csv"];

export const customUploadRequest = ({ file, onSuccess, onError }) => {
  const reader = new FileReader();

  if (!allowdFormats.includes(file.type)) {
    message.error(`The format of '${file.name}' is not supported.`);
    return onError();
  }

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
};
