import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const toggleComplete = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const deleteTask = () => {
    dispatch({ type: "DELETE_TASK", payload: task.id });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <span
        onClick={toggleComplete}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>
      <button onClick={deleteTask} style={{ marginLeft: "20px" }}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;