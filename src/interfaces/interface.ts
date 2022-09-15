export interface Todo {
    id:  string,
    desc: string,
    isCompleted: boolean
}

export interface TodoState {
    todoCount: number,
    todos: Todo[],
    completedList: boolean,
    pending: number,
    updateTodo: Todo
}