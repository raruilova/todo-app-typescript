import { useReducer } from "react"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer"
import { Todo, TodoState } from '../interfaces/interface';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const initialState:TodoState = {
    todoCount: 0,
    todos: [],
    completed: 0,
    pending: 0
}

export const TodoProvider = ({children}:Props) => {
    const [todoState, dispatch] = useReducer(todoReducer, initialState)
    
    const addTodo = (todo:Todo) => {
        dispatch({type: "ADD_TODO", payload: todo});
    }
    return (
        <TodoContext.Provider value={{
            todoState,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}