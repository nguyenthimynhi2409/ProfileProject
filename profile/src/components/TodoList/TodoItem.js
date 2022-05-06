import React, { useState } from "react";

const TodoItem = () => {
  const { completed, todoId, title } = this.props.todos;
  console.log("dsada", completed);
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => this.props.handleChange(id)}
      />
      <span className={completed ? "completed" : null}>{title}</span>
      <button className="btn-style" onClick={() => this.props.deleteTodo(id)}>
        {" "}
        X{" "}
      </button>
    </li>
  );
};

export default TodoItem;
