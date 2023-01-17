import {useState} from 'react';
import TodoEdit from './TodoEdit';
import useTodosContext from '../hooks/use-todos-context';

function TodoShow({todo}){
	const [showEdit, setShowEdit] = useState(false);
	const {deleteTodoById} = useTodosContext();

	const handleEditClick = () => {
		setShowEdit(!showEdit);
	};

	const handleDeleteClick = () => {
		deleteTodoById(todo.id);
	};

	const handleSubmit = () => {
		setShowEdit(false);
	};

	let content = <h3>{todo.title}</h3>;
	if (showEdit) {
		content = <TodoEdit onSubmit={handleSubmit} todo={todo} />;
	}

	return (
		<div className="border-2 border-green rounded w-48 mt-3">
			<div className="grid justify-items-center font-medium">{content}</div>
			<div className="grid grid-cols-2 justify-items-center pt-2" >
				<button onClick={handleEditClick} >
					Edit
				</button>
				<button onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</div>
	);

}

export default TodoShow;