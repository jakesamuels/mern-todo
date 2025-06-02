import { createContext, useContext, useState } from "react";

// Create context
const TaskContext = createContext();

// Context provider
export const TaskProvider = ({ children }) => {
  const [currentTask, setCurrentTask] = useState(null);

  return (
    <TaskContext.Provider value={{ currentTask, setCurrentTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook for easier access
export const useTaskContext = () => useContext(TaskContext);
