import React, { useState } from "react";

const TodoItem = (props) => {
  const { completed, id, title } = props.todo;
  return (
    <li className="todo-item">
      <div className="todo">
        <span className={completed ? "completed" : null}>{title}</span>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChange(id)}
        />
      </div>
      <button className="btn-style" onClick={() => props.deleteTodo(id)}>
        {" "}
        X{" "}
      </button>
    </li>
  );
};

export default TodoItem;
