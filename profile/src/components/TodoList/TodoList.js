import Contents from "../Dashboard/Contents";
import TodoHeader from "./TodoHeader/TodoHeader";
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios  from "axios";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import "../TodoList/TodoList.css";
const TodoList = () => {
    const data = JSON.parse(localStorage.getItem("user"))

    const [state, setState] = useState({
        todos:data
    });

    const handleCheckboxChange = id => {
        setState({
            todos: state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };
    const deleteTodo = id => {
        axios.delete(`https://profile-json-server.herokuapp.com/users/${id}`)
            .then(reponse => setState({
                todos: [
                    ...state.todos.filter(todo => {
                        return todo.id !== id;
                    })
                ]
            }))
    };
    const addTodo = title => {
        const todoData = {
            title: title,
            completed: false
        }
        axios.post("https://profile-json-server.herokuapp.com/users", todoData)
            .then(response => {
                console.log(response.data)
                setState({
                    todos: [...state.todos, response.data]
                })
            });
    };
    console.log(state.todos)
    return (

        <div className="todo-container">
            <TodoHeader/>
            <AddTodo addTodo={addTodo} />
            <Todos todos={state.todos}
                   handleChange={handleCheckboxChange}
                   deleteTodo={deleteTodo} />


        </div>

    );
}

export default TodoList;
