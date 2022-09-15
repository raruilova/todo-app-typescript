import { createContext } from "react";
import { Todo, TodoState } from "../interfaces/interface";

interface TodoContextProps  {
    todoState: TodoState,
    addTodo: (todo:Todo) => void,
    deleteTodo: ({id}:Todo) => void,
    updateTodos: (todo:Todo) => void,
    updateTodoSuccess: (Todo:Todo) => void,
    toggleTodo: (todo: Todo) => void,
    pendingTodos: () => void,
    completedButton: () => void
}

export const TodoContext = createContext({} as TodoContextProps);