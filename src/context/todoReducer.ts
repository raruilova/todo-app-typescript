import { TodoState } from "../interfaces/interface";
import { TodoAction } from "../types";



export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        case "UPDATE_TODO": 
            return {
                ...state,
                updateTodo: action.payload
            }
        case "UPDATE_TODO_SUCCESS":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }
    
        default:
            return state;
    }
}