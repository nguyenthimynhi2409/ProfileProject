import React, { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const onInputChange = (e) => {
    setTitle(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };
  return (
    <form className="form-container" onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Add Todo..."
        className="input-text"
        value={title}
        onChange={onInputChange}
      />
      <input type="submit" value="Submit" className="input-submit" />
    </form>
  );
};

export default AddTodo;
