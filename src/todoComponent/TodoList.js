import Todo from "./Todo";

const TodoList = ({ todos, toggleComplete, update, remove }) => {
    return (
        <div className="TodoList">
            <ul>{todos.map((todo) => (
                <Todo
                    key={todo.id}
                    toggleComplete={toggleComplete}
                    update={update}
                    remove={remove}
                    todo={todo}
                />
            ))}</ul>
        </div>
    )
}

export default TodoList