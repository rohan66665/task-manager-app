import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
    const [text, setText] = useState("");
    const { dispatch } = useContext(TaskContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;

        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };

        dispatch({ type: "ADD_TASK", payload: newTask });
        setText(""); 
    };
    return(
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "8px", width:"60%" }}
        />
        <button type="submit" style={{ padding: "8px 16px", marginLeft: "10px" }}>
          ADD Task 
          </button>
       </form>
    );
};

export default TaskForm;
    
