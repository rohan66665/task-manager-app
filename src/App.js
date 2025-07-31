import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
        <h2>📝 Task Manager</h2>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;