import {useContext, useState} from 'react';
import {LoginContext} from '../contexts/LoginContext';
import useTodosContext from '../hooks/use-todos-context';

function TodoCreate() {
	const [todo, setTodo] = useState('');
	const {user, setUser} = useContext(LoginContext);
	const {createTodo} = useTodosContext();

	const handleSignOut = (event) => {
		setUser({});
	}

	const handleChange = (event) => {
		setTodo(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createTodo(todo);
		setTodo('');
	}

	return (
		<>
			<div className="grid justify-items-center">
				<button className="border-2 rounded-sm border-gray my-2" onClick={(e) => handleSignOut(e)}>Sign Out</button>
				<img className="my-2" src={user.picture} alt="profile"></img>
				<h3 className="my-2">{user.name}'s Todos</h3>
			</div>
			<div className="my-3">
				<form onSubmit={handleSubmit}>
					<input className="border-2 border-black" value={todo} placeholder="Enter task here..." onChange={handleChange} />
				</form>
			</div>
		</>
	);
}

export default TodoCreate;