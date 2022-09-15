import { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";
import { Todo, TodoState } from "../interfaces/interface";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialState: TodoState = {
  todoCount: 0,
  todos: [],
  completedList: false,
  pending: 0,
  updateTodo: {
    id: "",
    desc: "",
    isCompleted: false,
  },
};

export const TodoProvider = ({ children }: Props) => {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo: Todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };
  const deleteTodo = (todo: Todo) => {
    dispatch({ type: "DELETE_TODO", payload: todo });
  };
  const updateTodos = (todo: Todo) => {
    dispatch({ type: "UPDATE_TODO", payload: todo });
  };
  const updateTodoSuccess = (todo:Todo) => {
    dispatch({ type: "UPDATE_TODO_SUCCESS", payload: todo });
  }
  const toggleTodo = (todo: Todo) => {
    dispatch({type: "TOGGLE_TODO", payload: todo});
  }
  const pendingTodos = () => {
    dispatch({type: "PENDING_TODOS"});
  }
  const completedButton = () => {
    dispatch({type: "COMPLETED_TODOS"})
  }
  return (
    <TodoContext.Provider
      value={{
        todoState,
        addTodo,
        deleteTodo,
        updateTodos,
        updateTodoSuccess,
        toggleTodo,
        pendingTodos,
        completedButton
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
