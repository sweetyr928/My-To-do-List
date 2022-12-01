import Todo from "./Todo";

const TodoList = ({ todos}) => {
    return (
        <div className="TodoList">
            <ul>{todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                />
            ))}</ul>
        </div>
    )
}

export default TodoList