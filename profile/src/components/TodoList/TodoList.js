import Contents from "../Dashboard/Contents";
import TodoHeader from "./TodoHeader/TodoHeader";
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios  from "axios";
import Todos from "./Todos";
const TodoList = ({option}) => {
    const [state, setState] = useState({
        todos: []
    });
	useEffect( () =>{
        axios.get("https://server1todo.herokuapp.com/users")
            .then(response => setState({todos:response.data}))
    },[])

    return (
        // <div className="container">
        //     <TodoHeader/>
        //     {/* <Todos todos={state.todos} /> */}


        // </div>
        <></>
    );
}

export default TodoList;
