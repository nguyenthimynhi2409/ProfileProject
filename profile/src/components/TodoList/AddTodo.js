import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");

  console.log(props.editTodo.todoEdit);
  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };
  console.log(props.option);
  return (
    <>
      {props.option == 1 ? (
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
      ) : (
        <form className="form-container">
          <input
            type="text"
            placeholder="Update Todo..."
            className="input-text"
            value={title ? title : props.editTodo.todoEdit}
            onChange={onInputChange}
          />
          <input
            type="button"
            value="UPDATE"
            className="input-submit"
            onClick={() => {
              props.updateTodo(props.editTodo.id, title);
              setTitle("");
              props.setOption(1);
            }}
          />
        </form>
      )}
    </>
  );
};

export default AddTodo;
