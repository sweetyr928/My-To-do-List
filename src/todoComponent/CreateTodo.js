import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CreateTodo = ({create }) => {
    const [userInput, setUserInput] = useState("");
    const navigate = useNavigate();

    const handleChange = e => {
        setUserInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newTodo = { id: uuidv4(), task: userInput, completed: false };
        create(newTodo);
        setUserInput("");

        // 홈으로 리다이렉트
        navigate('/')
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