import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteTodo, getTodoById, getTodoByIdUser, postTodo, updateTodo } from "../../api/api";
import AddTodo from "../TodoList/AddTodo";
import TodoHeader from "../TodoList/TodoHeader/TodoHeader";
import TodoItem from "../TodoList/TodoItem";

const UserTodo = (props) => {
  const { id } = useParams();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const data = await getTodoByIdUser(id);
    setTodos(data);
  };

  const handleCheckboxChange = async (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) todo.completed = !todo.completed;
        return todo;
      })
    );
    await updateTodo(id, todos);

  };

  const deleteTodos = async (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    await deleteTodo(id);
  };

  const addTodo = async (title) => {
    const todoData = {
      user: id,
      title: title,
      completed: false,
    };
    const res = await postTodo(todoData);
    setTodos([...todos, { ...res }]);
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

export default UserTodo;
