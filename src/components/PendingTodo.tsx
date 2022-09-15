import { useEffect } from "react";
import { useTodo } from "../hooks/useTodo";

export const PendingTodo = () => {
  const { pendingTodos, todoState } = useTodo();
  useEffect(() => {
    pendingTodos();
  }, [todoState.todos]);

  return <p>Pendientes: {todoState.pending}</p>;
};
