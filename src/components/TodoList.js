import TodoShow from './TodoShow';
import useTodosContext from '../hooks/use-todos-context';

function TodoList () {
	const {todos} = useTodosContext();

	const renderedTodos = todos.map((todo) => {
		return <TodoShow key={todo.id} todo={todo}/>;
	});

	return (
		<div>
			{renderedTodos}
		</div>
	);
}

export default TodoList;