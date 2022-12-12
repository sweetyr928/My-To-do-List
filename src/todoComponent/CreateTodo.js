import { useState } from "react";
import { fetchCreate } from "../util/api";
import "./CreateTodo.css";

const CreateTodo = () => {
    const [userInput, setUserInput] = useState("");

    const handleChange = e => {
        setUserInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        const newTodo = { task: userInput, completed: false };   
        fetchCreate('http://localhost:3001/todoList', newTodo)

        setUserInput("");
    };

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="task">Add new To-do List!</label>
            <input
                value={userInput.task}
                onChange={handleChange}
                type="text"
                placeholder="New Todo"
            />
            <button>Done</button>
        </form>
    );
}

export default CreateTodo; 