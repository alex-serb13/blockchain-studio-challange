import { Table, Button } from "antd";
import { calculateFileTotal } from "../../utils/calculateFileTotal";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <Button type="link">{text}</Button>,
  },
  {
    title: "Total",
    dataIndex: "content",
    key: "content",
    render: (text) => {
      return <span>{calculateFileTotal(text)}</span>;
    },
  },
  {
    title: "Upload Date",
    dataIndex: "uploadDate",
    key: "uploadDate",
    render: (text) => {
      const date = new Date(parseInt(text));
      return <span>{date.toUTCString()}</span>;
    },
  },
];

export const SheetsTable = ({ sheets, setSelectedSheet, setVisible }) => {
  const onRow = (record) => ({
    onClick: () => {
      setSelectedSheet(record);
      setVisible(true);
    },
  });

  return (
    <Table
      className="sheets-table"
      dataSource={sheets}
      pagination={false}
      onRow={onRow}
      columns={columns}
    />
  );
};
