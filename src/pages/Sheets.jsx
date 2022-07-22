import { useState } from "react";
import { ModalTable } from "../components/tables/ModalTable";
import { SheetsTable } from "../components/tables/SheetsTable";
import { EmptyPage } from "../components/EmptyPage";
import { getFromStorage } from "../utils/getFromStorage";

export const Sheets = () => {
  const [visible, setVisible] = useState(false);
  const [selectedSheet, setSelectedSheet] = useState({});
  const sheets = getFromStorage("sheets");

  if (!sheets.length) {
    return <EmptyPage description="No Sheets Uploaded Yet" />;
  }

  return (
    <>
      <ModalTable
        selectedSheet={selectedSheet}
        visible={visible}
        setVisible={setVisible}
      />
      <SheetsTable
        sheets={sheets}
        setVisible={setVisible}
        setSelectedSheet={setSelectedSheet}
      />
    </>
  );
};
