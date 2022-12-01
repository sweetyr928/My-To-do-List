import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';

const CreateTodo = () => {
    const [userInput, setUserInput] = useState("");
    const navigate = useNavigate();

    const handleChange = e => {
        setUserInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        const newTodo = { task: userInput, completed: false };   
        const request = {
            method: "POST",
            body: JSON.stringify(newTodo),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('http://localhost:3001/todoList', request)
            .then(() => {
                // 홈으로 리다이렉트
                navigate('/')
            })
            .catch(err => console.log(err));
        console.log(e.type);

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