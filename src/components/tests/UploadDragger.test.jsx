import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { UploadDragger } from "../UploadDragger";

const mockValidCSV = new File(["Total\n1\n2\n3\n"], "mock-data.csv", {
  type: "text/csv",
});

const mockInvalidCSV = new File(["T\n1\n2\n3\n"], "mock-data-error.csv", {
  type: "text/csv",
});

const mockInvalidFormat = new File(["jpeg"], "mock.jpeg", {
  type: "image/jpeg",
});

describe("UploadDragger test", () => {
  it("renders the UploadDragger and uploads successfully.", async () => {
    render(<UploadDragger />);
    const uploadInput = screen.getByRole("button").firstChild;
    userEvent.upload(uploadInput, mockValidCSV);

    await waitFor(() => {
      expect(
        screen.getByText("mock-data.csv file uploaded successfully.")
      ).toBeInTheDocument();
    });
  });

  it("renders the UploadDragger and the upload fails.", async () => {
    render(<UploadDragger />);
    const uploadInput = screen.getByRole("button").firstChild;
    userEvent.upload(uploadInput, mockInvalidCSV);

    await waitFor(() => {
      expect(
        screen.getByText("mock-data-error.csv is not a valid CSV format.")
      ).toBeInTheDocument();
    });
  });

  it("renders the UploadDragger and the format is not supported", async () => {
    render(<UploadDragger />);
    const uploadInput = screen.getByRole("button").firstChild;
    userEvent.upload(uploadInput, mockInvalidFormat);

    await waitFor(() => {
      expect(
        screen.getByText("The format of 'mock.jpeg' is not supported.")
      ).toBeInTheDocument();
    });
  });
});
