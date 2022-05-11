import React from "react";
import { Popconfirm } from "antd";
import { AiFillEdit } from "react-icons/ai";
const TodoItem = (props) => {
  const { completed, id, title } = props.todo;
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChange(id)}
      />
      <span className={completed ? "completed" : null}>{title}</span>
      <div className="btn_edit">
        <AiFillEdit onClick={() => {
          props.getTodoTitle(id, title);
          props.option(2);
        } 
        }/>
      </div>
      <Popconfirm
        title="Hãy Suy Nghĩ Kỹ Trước Khi Xoá"
        okText="Yes"
        cancelText="No"
        onConfirm={() => props.deleteTodo(id)}
      >
        <button className="btn-style">X</button>
      </Popconfirm>
    </li>
  );
};

export default TodoItem;
