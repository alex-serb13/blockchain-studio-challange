import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Total",
    dataIndex: "content",
    key: "content",
    render: (text) => {
      const contentList = text
        .split("\n")
        .filter((item) => !isNaN(parseInt(item)));
      const initialValue = 0;
      const total = contentList.reduce(
        (acc, value) => acc + parseInt(value),
        initialValue
      );

      return <span>{total}</span>;
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
