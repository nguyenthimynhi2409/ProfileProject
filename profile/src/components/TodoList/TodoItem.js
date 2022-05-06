import React from "react";

class TodoItem extends React.Component {
	render() {

		return (
			<>
				{this.props.todo.map( note => (
					<li className="todo-item" key={note.todoId}>
						<input className="input-item"
							type="checkbox"
							checked={note.completed}
							onChange={() => this.props.handleChange(note.todoId)}
						/>
						<span  className={note.completed ? "completed" : null}>
                    {note.title}
                </span>
						<button className="btn-style" onClick={() => this.props.deleteTodo(note.todoId,this.props.id)}> X </button>
					</li>
				))}
			</>
		);

	}
}
export default TodoItem