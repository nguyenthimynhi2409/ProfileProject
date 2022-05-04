import React from "react";

class TodoItem extends React.Component {
	render() {
		const { completed,todoId,title} = this.props.todos
		return (
			<div>
				<li className="todo-item">
					<input type="checkbox"
							checked={completed}

					/>
					<span >

					</span>
					<button className="btn-style" >X</button>
				</li>
			</div>
		);
	}
}
export default TodoItem