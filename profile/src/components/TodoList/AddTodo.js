import React, { useEffect, useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");

  const onInputChange = (e) => {
    setTitle(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };
  
  useEffect(() => {
    if (props.editTodo.todoEdit) setTitle(props.editTodo.todoEdit);
  }, [props.editTodo.todoEdit]);

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
            value={title}
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
