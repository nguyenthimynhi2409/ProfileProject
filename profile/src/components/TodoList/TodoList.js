import TodoHeader from "./TodoHeader/TodoHeader";
import React, { useEffect, useState } from "react";
import "../TodoList/TodoList.css";
import AddTodo from "./AddTodo";
import {
  postTodo,
  updateTodo,
  deleteTodo,
  getTodoByIdUser,
} from "../../api/api";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const id_user = JSON.parse(localStorage.getItem("id"));
  const [todos, setTodos] = useState([]);
  const [todoEdit, setTodoEdit] = useState({});
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    const data = await getTodoByIdUser(id_user);
    setTodos(data);
  };
  const handleCheckboxChange = async (id) => {
    let res;
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
          res = todo;
        }
        return todo;
      })
    );
    const dataTodo = {
      user: res.user,
      title: res.title,
      completed: res.completed,
    };
    await updateTodo(id, dataTodo);
  };

  // Edit todo
  const editTodo = async (id, title) => {
    console.log(title);
    let res;
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          todo.title = title;
          res = todo;
        }
        return todo;
      })
    );
    const dataTodo = {
      user: res.user,
      title: res.title,
      completed: res.completed,
    };
    console.log(title);
    await updateTodo(id, dataTodo);
  };
  const getTitle = (id, title) => {
    setTodoEdit({
      id: id,
      todoEdit: title,
    });
   
  };

  const deleteTodos = async (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    await deleteTodo(id);
  };

  const addTodo = async (title) => {
    const todoData = {
      user: id_user,
      title: title,
      completed: false,
    };
    const res = await postTodo(todoData);
    setTodos([...todos, { ...res }]);
  };
  console.log(todos);
  console.log(todoEdit);
  return (
    <div className="todo-container">
      <TodoHeader />
    
      <AddTodo editTodo={todoEdit} addTodo={addTodo} updateTodo={editTodo}/>

      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            getTodoTitle={getTitle}
            handleChange={handleCheckboxChange}
            deleteTodo={deleteTodos}
          />
        ))}
    </div>
  );
};

export default TodoList;
