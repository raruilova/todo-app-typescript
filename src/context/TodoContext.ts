import { createContext } from "react";
import { Todo, TodoState } from "../interfaces/interface";

interface TodoContextProps  {
    todoState: TodoState,
    addTodo: (todo:Todo) => void
}

export const TodoContext = createContext({} as TodoContextProps);