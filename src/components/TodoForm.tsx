import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useTodo } from "../hooks/useTodo";
import { Todo } from "../interfaces/interface";

export const TodoForm = () => {
  const [form, setForm] = useState<Todo>({
    id: crypto.randomUUID(),
    desc: "",
    isCompleted: false,
  });

  const { addTodo, todoState, updateTodoSuccess, completedButton } = useTodo();

  useEffect(() => {
    if (todoState.updateTodo.id !== "") {
      setForm(todoState.updateTodo);
    }
    
  }, [todoState.updateTodo]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.desc.trim() === "") {
      alert("No envies una tarea vacía");
      return;
    }
    if (todoState.updateTodo.id) {
      updateTodoSuccess(form);
      todoState.updateTodo = {
        id: "",
        desc: "",
        isCompleted: false,
      };
    } else {
      addTodo(form);
    }

    setForm({
      id: crypto.randomUUID(),
      desc: "",
      isCompleted: false,
    });
  };
  return (
    <div className="Form">
      <form  onSubmit={handleSubmit}>
        <label htmlFor="desc">Tarea</label>
        <input
          type="text"
          name="desc"
          placeholder="Nombre de la tarea"
          value={form.desc}
          onChange={handleChange}
        />
        <div className="btn">
        <input
          type="submit"
          value={todoState.updateTodo.id ? "Editar" : "Registrar"}
        />
        <a className="btn-completed-list" onClick={() => completedButton()} href="#">Completados</a>
        </div>
      </form>
    </div>
  );
};
