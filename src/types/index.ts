import { Todo } from "../interfaces/interface";

export type TodoAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: Todo}
  | { type: "DELETE_TODO"; payload: Todo }
  | { type: "UPDATE_TODO"; payload: Todo }
  | { type: "UPDATE_TODO_SUCCESS"; payload: Todo }
  | { type: "PENDING_TODOS" };
