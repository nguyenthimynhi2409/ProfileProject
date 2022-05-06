import React from "react";
import TodoItem from "./TodoItem";

class Todos extends React.Component {
	render() {
		const {id,todo} = this.props.todos
		return (
			<div>
				<ul>

						<TodoItem
							key={id}
							todo={todo}
							handleChange={this.props.handleChange}
							deleteTodo={this.props.deleteTodo}
							/>


				</ul>
			</div>
		);
	}
}
export default Todos