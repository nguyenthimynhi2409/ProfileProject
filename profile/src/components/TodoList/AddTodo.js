import React, { useEffect, useState } from "react";
import { updateTodo } from "../../api/api";

const AddTodo = (props) => {
  const [title, setTitle] = useState(props.editTodo.todoEdit);

  console.log(props.editTodo.todoEdit);
  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };

  return (
    <>
      {props.editTodo.todoEdit && title !== "" ? (
        <form className="form-container">
          <input
            type="text"
            placeholder="Update Todo..."
            className="input-text"
            value={(title)? title: props.editTodo.todoEdit}
            onChange={onInputChange}
          />
          <input
            type="button"
            value="UPDATE"
            className="input-submit"
            onClick={() => {
              props.updateTodo(props.editTodo.id, title);
              setTitle("");
            }}
          />
        </form>
      ) : (
        <form className="form-container">
          <input
            type="text"
            placeholder="Add Todo..."
            className="input-text"
            value={title}
            onChange={onInputChange}
          />
          <input
            type="button"
            value="ADD"
            onClick={addTodo}
            className="input-button"
          />
        </form>
      )}
    </>
  );
};

export default AddTodo;
