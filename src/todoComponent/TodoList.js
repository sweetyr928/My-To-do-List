import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
