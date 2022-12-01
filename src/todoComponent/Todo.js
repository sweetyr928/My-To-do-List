import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";

function Todo({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);
    // const navigate = useNavigate();

    const handleDelete = () => {
        fetch(`http://localhost:3001/todoList/${todo.id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        })
        .then(() => window.location.reload())
        .catch(err => console.log(err));
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const patchData = {
            "id": todo.id,
            "task": task,
            "completed": todo.completed,
        }
        fetch(`http://localhost:3001/todoList/${todo.id}`, {
            method: "PATCH",
            body: JSON.stringify(patchData),
            headers: {
                // 지금 보내는 데이터가 json 형태이다.
                'Content-Type': 'application/json'
            },
        })
        .then(() => window.location.reload())
        .catch(err => console.log(err));

        toggleEdit();
    };

    const toggleCompleted = () => {

        const patchData = {
            "id": todo.id,
            "task": todo.task,
            "completed": !todo.completed,
        }

        fetch(`http://localhost:3001/todoList/${todo.id}`, {
            method: "PATCH",
            body: JSON.stringify(patchData),
            headers: {
                // 지금 보내는 데이터가 json 형태이다.
                'Content-Type': 'application/json'
            },
        })
        .then(() => window.location.reload())
        .catch(err => console.log(err));
    };

    return (isEditing ?
        <div className="Todo">
            <form className="Todo-edit-form" >
                <input onChange={handleChange} value={task} type="text" />
                <button onClick={handleUpdate}>Save</button>
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
                <button onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

export default Todo;