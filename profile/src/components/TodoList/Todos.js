import React from "react";
import TodoItem from "./TodoItem";
const Todos = () => {
  return (
    <div>
      <ul>
        <TodoItem
          key={this.props.todos.id}
          todo={this.props.todos}
          handleChange={this.props.handleChange}
          deleteTodo={this.props.deleteTodo}
        />
      </ul>
    </div>
  );
};
export default Todos;
