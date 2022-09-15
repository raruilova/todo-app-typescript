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
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map(({...todo}) => {
                    if(todo.id === action.payload.id) {
                        todo.isCompleted = !todo.isCompleted; 
                    }
                    return todo;
                } )
            }
        case "PENDING_TODOS":
            return {
                ...state,
                pending: state.todos.filter(todo => !todo.isCompleted).length
            }
        case "COMPLETED_TODOS":
            return {
                ...state,
                completedList: !state.completedList
            }
    
        default:
            return state;
    }
}