export interface Todo {
    id:  string,
    desc: string,
    isCompleted: boolean
}

export interface TodoState {
    todoCount: number,
    todos: Todo[],
    completed: number,
    pending: number,
    updateTodo: Todo
}