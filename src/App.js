import React, { Component } from "react";
import TaskEditor from "./components/TaskEditor";
import TaskList from "./components/TaskList";
import createTask from "./util/create-task";

export default class App extends Component {
	state = {
		tasks: [],
	};

	addTask = () => {
		console.log(this.state.tasks);
		const newTask = createTask();
		this.setState({
			tasks: [...this.state.tasks, newTask],
		});
	};
	removeTask = (id) => {
		this.setState((prevState) => {
			return { tasks: prevState.tasks.filter((task) => task.id !== id) };
		});
		console.log(this.state.tasks);
	};

	render() {
		const { tasks } = this.state;
		return (
			<div>
				<TaskEditor onAddTask={this.addTask} />
				{tasks.length > 0 && (
					<TaskList tasks={tasks} onRemoveTask={this.removeTask} />
				)}
			</div>
		);
	}
}
