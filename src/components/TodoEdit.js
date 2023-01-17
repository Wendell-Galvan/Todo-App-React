import {useState} from 'react';
import useTodosContext from '../hooks/use-todos-context';

function TodoEdit({todo, onSubmit}) {
	const [title, setTitle] = useState(todo.title);
	const {editTodoById} = useTodosContext();

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		onSubmit();
		editTodoById(todo.id, title);
	};

	return (
		<form onSubmit={handleSubmit} >
			<label className="mx-5">Title</label>
			<input className="border-2 border-black" value={title} onChange={handleChange} />
			<button className="border border-black">
				Save
			</button>
		</form>
	);
}

export default TodoEdit;