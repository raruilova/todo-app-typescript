import { ChangeEvent, FormEvent, useState } from "react";
import { useTodo } from "../hooks/useTodo";
import { Todo } from "../interfaces/interface";

export const TodoForm = () => {
  const [form, setForm] = useState<Todo>({
    id: crypto.randomUUID(),
    desc: "",
    isCompleted: false,
  });

  const { addTodo } = useTodo();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.desc === "") {
      alert("No envies una tarea vacía");
      return;
    }
    addTodo(form);
    setForm({
      id: crypto.randomUUID(),
      desc: "",
      isCompleted: false,
    });
  };
  return (
    <div>
      <form className="Form" onSubmit={handleSubmit}>
        <label htmlFor="desc">Tarea</label>
        <input
          type="text"
          name="desc"
          placeholder="Nombre de la tarea"
          value={form.desc}
          onChange={handleChange}
        />
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
};
