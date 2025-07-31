import { createContext, useReducer, useEffect } from "react";
import taskReducer from "../reducers/taskReducer";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData): [];
});

useEffect(() => {
  localStorage.getItem("tasks", JSON.stringify(tasks));
}, [tasks]);

return(
    <TaskContext.Provider value={{ tasks, dispatch }}> {children}</TaskContext.Provider>
);
};
export { TaskContext, TaskProvider };