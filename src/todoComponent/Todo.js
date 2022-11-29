import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, remove, update, toggleComplete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    const handleClick = (e) => {
        remove(todo.id);
    };
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        update(todo.id, task);
        toggleEdit();
    };
    const handleChange = (e) => {
        setTask(e.target.value);
    };
    const toggleCompleted = (e) => {
        toggleComplete(todo.id);
    };

    return (isEditing ?
        <div className="Todo">
            <form className="Todo-edit-form" onSubmit={handleUpdate}>
                <input onChange={handleChange} value={task} type="text" />
                <button>Save</button>
            </form>
        </div> :
        <div className="Todo">
            <li
                id={todo.id}
                onClick={toggleCompleted}
                className={todo.completed ? "Todo-task completed" : "Todo-task"}
            >
                {todo.task}
            </li>
            <div className="Todo-buttons">
                <button onClick={toggleEdit}>
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button onClick={handleClick}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

export default Todo;