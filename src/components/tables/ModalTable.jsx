import { Table, Modal } from "antd";

const columns = [
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (text) => <span>{text}</span>,
  },
];

export const ModalTable = ({ selectedSheet, visible, setVisible }) => {
  const tableFormat = selectedSheet?.content
    ?.split("\n")
    ?.filter((item) => !isNaN(parseInt(item)))
    ?.map((item) => ({ total: item }));
  const modalDate = new Date(selectedSheet.uploadDate);

  return (
    <Modal
      title={`${selectedSheet.name} - ${modalDate.toUTCString()}`}
      centered
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={null}
    >
      <Table
        columns={columns}
        dataSource={tableFormat}
        pagination={false}
        sticky
      />
    </Modal>
  );
};
