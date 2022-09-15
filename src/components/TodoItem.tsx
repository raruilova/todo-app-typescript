import { Todo } from "../interfaces/interface"

interface Props {
    todo: Todo
}

export const TodoItem = ({todo}:Props) => {
    return (
        <div className="Container-card">
            <div className="Card">
                <p>{todo.desc}</p>
            </div>
            <div className="Card-options">
                <button className="Card__delete">Eliminar</button>
                <button className="Card__edit">Editar</button>
                <span>Incompleto</span>
                <input type="checkbox" name="" id="" />
            </div>
        </div>
    )
}