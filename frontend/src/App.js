import { useState, useEffect } from "react";
import { fetchAllTasks } from "./utils/utils.js";

import Header from "./components/Header.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await fetchAllTasks();
        setTasks(tasks);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch tasks.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTaskAdded = async (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <main className="App">
      <Header onTaskAdded={handleTaskAdded} />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <TaskList tasks={tasks} />
      )}
    </main>
  );
}

export default App;
