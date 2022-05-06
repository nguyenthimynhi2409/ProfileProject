import React from "react";

class TodoItem extends React.Component {
	render() {

		return (
			<>
				{this.props.todo.map( note => (
					<li className="todo-item" key={note}>
						<input
							type="checkbox"
							checked={note.completed}
							onChange={() => this.props.handleChange(note.id)}
						/>
						<span className={note.completed ? "completed" : null}>
                    {note.title}
                </span>
						<button className="btn-style" onClick={() => this.props.deleteTodo(note.id)}> X </button>
					</li>
				))}
			</>
		);

	}
}
export default TodoItem