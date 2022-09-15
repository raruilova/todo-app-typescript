import { useTodo } from "../hooks/useTodo";
import { CompeltedList } from "./CompletedList";
import { TodoForm } from "./TodoForm";

export const Todo = () => {
  const { todoState } = useTodo();
  console.log(todoState.completedList)
  return <>{todoState.completedList ? <CompeltedList /> : <TodoForm />}</>;
};
