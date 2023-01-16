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
			<div>
				<button className="border-2 rounded-sm border-black my-2" onClick={(e) => handleSignOut(e)}>Sign Out</button>
				<img className="my-2" src={user.picture} alt="profile"></img>
				<h3 className="my-2">{user.name} Todos</h3>
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					<input className="border-2 border-black" value={todo} onChange={handleChange} />
				</form>
			</div>
		</>
	);
}

export default TodoCreate;