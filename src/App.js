import {useState} from 'react';
import Login from './components/Login';
import TodoCreate from './components/TodoCreate';
import {LoginContext} from './contexts/LoginContext';


function App() {
	const [user, setUser] = useState({});

	return (
		<div>
			<LoginContext.Provider value={{ user, setUser}}>
				{Object.keys(user).length !== 0 ? <TodoCreate /> : <Login />}
			</LoginContext.Provider>
		</div>
	);
}

export default App;

