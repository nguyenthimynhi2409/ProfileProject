

import React, { useState } from "react";

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
  const editOradd = () => {
      console.log(props.editTodo.todoEdit)
    if (props.editTodo.todoEdit){

        return <form className="form-container" >
            <input
                type="text"
                placeholder="Add Todo..."
                className="input-text"
                value={title}
                onChange={onInputChange}

            />
            <input type="button" value="UPDATE" className="input-submit" />
        </form>
    }else {
     return <form className="form-container" >
            <input
                type="text"
                placeholder="Add Todo..."
                className="input-text"
                value={title}
                onChange={onInputChange}

            />
            <input type="button" value="ADD" onClick={addTodo} className="input-button" />
        </form>
    }
  }
  return (
      <>
          {editOradd()}
      </>
  );
};

export default AddTodo;