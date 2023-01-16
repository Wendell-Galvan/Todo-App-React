import {useContext} from 'react';
import TodosContext from '../contexts/TodosContext';

function useTodosContext() {
	return useContext(TodosContext);
};

export default useTodosContext;