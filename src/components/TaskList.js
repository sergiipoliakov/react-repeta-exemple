import React from "react";

export default function TaskList({ tasks, onRemoveTask }) {
	return (
		<div>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<p>{task.text}</p>
						<button type="button" onClick={() => onRemoveTask(task.id)}>
							удалить
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
