import React, {useState} from "react";
import React from 'react';
import PropTypes from 'prop-types';

function  AddTodo ()  {
	const [title, setTitle] = useState("");

	const onInputChange = e => {
		setTitle(e.target.value)
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
		  <input
			  type="submit"
			  value="Submit"
			  className="input-submit"/>
	  </form>
  );
}



export default AddTodo;