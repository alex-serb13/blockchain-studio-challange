import { Table, Modal } from "antd";
import { mapSheetToDataSource } from "../../utils/mapSheetToDataSource";

const columns = [
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (text) => <span>{text}</span>,
  },
];

export const ModalTable = ({ selectedSheet, visible, setVisible }) => {
  const data = mapSheetToDataSource(selectedSheet.content);
  const modalDate = new Date(selectedSheet.uploadDate);

  return (
    <Modal
      title={`${selectedSheet.name} - ${modalDate.toUTCString()}`}
      centered
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={null}
    >
      <Table columns={columns} dataSource={data} pagination={false} sticky />
    </Modal>
  );
};
