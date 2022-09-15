import { useTodo } from "../hooks/useTodo";
import { TodoItem } from "./TodoItem";

export const CompeltedList = () => {
  const { todoState, completedButton } = useTodo();
  return (
    <>
      <h1>Completados</h1>
      <button onClick={() => completedButton()}>Todos</button>
    </>
  );
};
