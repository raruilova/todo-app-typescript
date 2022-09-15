import { Todo } from "../interfaces/interface";

export type TodoAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: { id: string } }
  | { type: "DELETE_TODO"; payload: { id: string } }
  | { type: "UPDATE_TODO"; payload: Todo };
