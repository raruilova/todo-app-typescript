import { useTodo } from "../hooks/useTodo";
import { TodoItem } from "./TodoItem";

export const CompeltedList = () => {
  const { todoState, completedButton } = useTodo();
  const comp = todoState.todos.filter((todo) => todo.isCompleted === true);
  return (
    <>
      <h2>Completados</h2>
      <button className="btn-todo" onClick={() => completedButton()}>Todos</button>
      {comp.length > 0 ? (
        comp.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))
      ): <h3>No hay todos completados</h3> }
    </>
  );
};
