import React, { useEffect, useState } from "react";
import { Table, Space, Button, Popconfirm } from "antd";
import "../TodoList/TodoList.css";

const TodoItem = (props) => {
  // const { completed, id, title } = props.todo;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      width: "50%",
      ellipsis: true,
      title: "Todo",
      dataIndex: "title",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",

      render: (record) => (
          <Space className="action">
            <Button
                // style={{display: "none"}}
                //   className={record && record.completed === true ? "display-btn" : "block"}
                disabled={record && record.completed === true    }
                type="primary"
                onClick={() => {
                  console.log(record.completed)
                  ;
                  props.getTodoTitle(record.key, record.title);
                  props.option(2);
                }}
            >
              Edit
            </Button>
            <Popconfirm
                title="Are you sure?"
                okText="Yes"
                cancelText="No"
                onConfirm={() => props.deleteTodo(record.key)}
            >
              <Button type="danger">
                <a>Delete</a>
              </Button>
            </Popconfirm>
          </Space>
      ),
    },
  ];

  const data = [];
  if (props.datasource) {
    for (let i = 0; i < props.datasource.length; i++) {
      data.push({
        key: props.datasource[i].id,
        title: props.datasource[i].title,
        completed: props.datasource[i].completed,
        user: props.datasource[i].user,
      });
    }
  }

  useEffect(() => {
    var arr = [];
    props.datasource.map((item) => {
      if (item.completed) arr.push(item.id);
    });
    setSelectedRowKeys(arr);
  }, [props.datasource]);
  let index;
  const rowSelection = {
    selectedRowKeys,
    onChange: (record) => {
      if (record.length >= 0) {
        if (record.length < selectedRowKeys.length) {
          selectedRowKeys.map((i) => {
            if (!record.includes(i)) index = i;
          });
          props.handleChange(index);
        } else props.handleChange(record[record.length - 1]);
      }
      setSelectedRowKeys(record);
    },

  };
  return (
      <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={false}
      />
  );
};

export default TodoItem;