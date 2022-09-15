import { useTodo } from "../hooks/useTodo"
import { Todo } from "../interfaces/interface"

interface Props {
    todo: Todo
}

export const TodoItem = ({todo}:Props) => {
    const { deleteTodo, updateTodos } = useTodo();
    return (
        <div className="Container-card">
            <div className="Card">
                <p>{todo.desc}</p>
            </div>
            <div className="Card-options">
                <button className="Card__delete" onClick={() => deleteTodo(todo)}>Eliminar</button>
                <button className="Card__edit" onClick={() => updateTodos(todo)}>Editar</button>
                <span>Incompleto</span>
                <input type="checkbox" name="" id="" />
            </div>
        </div>
    )
}