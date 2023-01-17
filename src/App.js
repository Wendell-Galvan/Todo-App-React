import {useState, useEffect, useContext} from 'react';
import Login from './components/Login';
import TodoCreate from './components/TodoCreate';
import {LoginContext} from './contexts/LoginContext';
import TodoList from './components/TodoList';
import TodosContext from './contexts/TodosContext';


function App() {
	const [user, setUser] = useState({});
	const {fetchTodos} = useContext(TodosContext);

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	return (
		<div>
			<LoginContext.Provider value={{ user, setUser}}>
				{Object.keys(user).length !== 0 ? (
					<div className="grid justify-items-center" >
						<TodoCreate />
						<TodoList />
					</div>
				) : <Login />}
			</LoginContext.Provider>
		</div>
	);
}

export default App;

