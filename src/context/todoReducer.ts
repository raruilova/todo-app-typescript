import { TodoState } from "../interfaces/interface";
import { TodoAction } from "../types";



export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
    
        default:
            return state;
    }
}