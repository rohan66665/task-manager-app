import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div style={{ marginTop: "20px" }}>
      {tasks.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                fontSize: "16px",
              }}
            >
              {task.text}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ fontStyle: "italic", color: "gray" }}>
          No tasks added yet.
        </p>
      )}
    </div>
  );
};

export default TaskList;