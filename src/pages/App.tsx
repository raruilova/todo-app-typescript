import "../assets/css/App.css";
import { PendingTodo } from "../components/PendingTodo";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { TodoProvider } from "../context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <main>
        <h1>TODO's</h1>
        <PendingTodo />
        <section>
          <TodoForm />
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
