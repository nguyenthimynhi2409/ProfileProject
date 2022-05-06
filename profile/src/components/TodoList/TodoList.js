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
        todos:[]
    })

    useEffect(() => {
        const config = {
            params: {
                _limit: 5
            }

        }
        // tạo GET request để lấy danh sách todos
        axios.get(`https://profile-json-server.herokuapp.com/todos`, config)
            .then(response => setState({ todos: response.data }));
    }, []);

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
        axios.delete(`https://profile-json-server.herokuapp.com/todos/$id`)
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
        axios.post("https://server1todo.herokuapp.com/todos", todoData)
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
