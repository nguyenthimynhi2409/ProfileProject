import { Table, Button, Space, Popconfirm } from "antd";
import React, { useState } from "react";

const TodoItem = (props) => {
  const [selectedRowsKey, setSelectedRowsKey] = useState([]);
  const columns = [
    {
      width: "50%",
      ellipsis: true,
      title: "Title",
      dataIndex: "title",
      key: "key",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <Space className="action">
          <Button
            type="primary"
            onClick={() => {
              props.getTodoTitle(record.id, record.title);
              props.option(2);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => props.deleteTodo(record.id)}
          >
            <Button type="danger">
              <a>Delete</a>
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const rowSelection = {selectedRowsKey,
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    }
  };

  return (
    <div>
      <Table
        rowSelection={{...rowSelection }}
        columns={columns}
        dataSource={props.datasource}
      />
    </div>
  );
};

export default TodoItem;
