import { useTodo } from "../hooks/useTodo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todoState } = useTodo();
  return (
    <>
      {!todoState.todos.length ? (
        <h2>No hay TODO'S</h2>
      ) : (
        todoState.todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </>
  );
};
