import {createContext, useState, useCallback} from 'react';
import axios from 'axios';

const TodosContext = createContext();

function Provider ({children}) {
	const [todos, setTodos] = useState([]);

	// Request to fetch current todos
	const fetchTodos = useCallback(async () => {
		const response = await axios.get('http://localhost:3005/todos');

		setTodos(response.data);
	}, []);

	// Edit todo
	const editTodoById = async (id, newTitle) => {
		const response = await axios.put(`http://localhost:3005/todos/${id}`, {
			title: newTitle
		});

		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {...todo, ...response.data};
			}

			return todo;
		});

		setTodos(updatedTodos);
		console.log(updatedTodos);
	};

	// Delete todo
	const deleteTodoById = async (id) => {
		await axios.delete(`http://localhost:3005/todos/${id}`);

		const updatedTodos = todos.filter((todo) => {
			return todo.id !== id;
		});

		setTodos(updatedTodos);
	};

	// Add todo with POST requst 
	const createTodo = async (title) => {
		const response = await axios.post('http://localhost:3005/todos', {
			title
		});

		const updatedTodos = [
			...todos,
			response.data
		];
		setTodos(updatedTodos);
	};

	const ValueToShare = {
		todos,
		deleteTodoById,
		editTodoById,
		createTodo,
		fetchTodos
	};

	return (
		<TodosContext.Provider value={ValueToShare}>
			{children}
		</TodosContext.Provider>
	);

}

export {Provider};
export default TodosContext;