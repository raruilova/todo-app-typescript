import { useTodo } from "../hooks/useTodo";
import { CompeltedList } from "./CompletedList";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const { todoState } = useTodo();
  return (
    <>
      {todoState.completedList ? (
        <CompeltedList />
      ) : (
        <>
          <TodoForm />
          <br />
          <section>
            <TodoList />
          </section>
        </>
      )}
    </>
  );
};
