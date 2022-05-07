import TodoHeader from "./TodoHeader/TodoHeader";
import React, { useEffect, useState } from "react";
import "../TodoList/TodoList.css";
import AddTodo from "./AddTodo";
import { getTodoById, postTodo, updateTodo, deleteTodo, getTodoByIdUser } from "../../api/api";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const id_user = JSON.parse(localStorage.getItem("id"));

  const [todos, setTodos] = useState();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const data = await getTodoByIdUser(id_user);
    setTodos(data);
  };
  const handleCheckboxChange = async (id) => {
    const todo = await getTodoById(id);
    const completed = todo.completed;
    const user = todo.user;
    const title = todo.title;
    const data = {
      user: user,
      title: title,
      completed: !completed,
    };
    await updateTodo(id, data);
    getTodos();
  };

  const deleteTodos = async (id) => {
    await deleteTodo(id);
    getTodos();
  };
  const addTodo = async (title) => {
    const todoData = {
      user: id_user,
      title: title,
      completed: false,
    };
    await postTodo(todoData);
    getTodos();
  };
  return (
    <div className="todo-container">
      <TodoHeader />
      <AddTodo addTodo={addTodo} />
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={handleCheckboxChange}
            deleteTodo={deleteTodos}
          />
        ))}
    </div>
  );
};

export default TodoList;
