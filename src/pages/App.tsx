import "../assets/css/App.css";
import { PendingTodo } from "../components/PendingTodo";
import { Todo } from "../components/Todo";
import { TodoList } from "../components/TodoList";
import { TodoProvider } from "../context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <main>
        <h1>TODO's</h1>
        <PendingTodo />
        <section>
          <Todo />
        </section>
        <br />
        <section>
          <TodoList />
        </section>
      </main>
    </TodoProvider>
  );
}

export default App;
