import { useState } from "react";
import { ModalTable } from "../components/ModalTable";
import { SheetsTable } from "../components/SheetsTable";
import { EmptyPage } from "../components/EmptyPage";

export const Sheets = () => {
  const [visible, setVisible] = useState(false);
  const [selectedSheet, setSelectedSheet] = useState({});

  const storedSheets = localStorage.getItem("sheets") || JSON.stringify([]);
  const sheets = JSON.parse(storedSheets);

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
