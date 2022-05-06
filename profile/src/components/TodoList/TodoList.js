import TodoHeader from "./TodoHeader/TodoHeader";
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios  from "axios";
import Todos from "./Todos";

import "../TodoList/TodoList.css";
import AddTodo from "./AddTodo";

const TodoList = () => {
    const id_user = JSON.parse(localStorage.getItem("user"))

    const [state,setState] = useState({

    })

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
    const deleteTodo = (todoId,id) => {
        axios.delete(`https://profile-json-server.herokuapp.com/users/${id}/todo/${todoId}`)
            .then(reponse => setState({
                todos: [
                    ...state.todos.todo.filter(todo => {
                        return todo.todoId !== todoId;
                    })
                ]
            }))
    };
    const addTodo = (title,id) => {
        const todoData = {
            id:id,
            title: title,
            completed: false
        }
        axios.post(`https://profile-json-server.herokuapp.com/users/${id}/todo`, todoData)
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
