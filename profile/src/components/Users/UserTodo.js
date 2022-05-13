import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {deleteTodo, getTodoById, getTodoByIdUser, postTodo, updateTodo} from "../../api/api";
import AddTodo from "../TodoList/AddTodo";
import TodoHeader from "../TodoList/TodoHeader/TodoHeader";
import TodoItem from "../TodoList/TodoItem";

const UserTodo = () => {
	const {id} = useParams();

	const [todos, setTodos] = useState([]);
 	const [todoEdit, setTodoEdit] = useState({});
  	const [opt, setOtp] = useState(1);
  	useEffect(() => {
   	 getTodos();
  	}, []);
	const getTodos = async () => {
		const data = await getTodoByIdUser(id);
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

      <AddTodo
        editTodo={todoEdit}
        addTodo={addTodo}
        updateTodo={editTodo}
        option={opt}
        setOption={(opt) => setOtp(opt)}
      />

      <TodoItem
        datasource={todos}
        getTodoTitle={getTitle}
        handleChange={handleCheckboxChange}
        deleteTodo={deleteTodos}
        option={(opt) => setOtp(opt)}
      />
    </div>
  );
};

export default UserTodo;