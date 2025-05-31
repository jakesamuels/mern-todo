import { useState, useEffect } from "react";
import { fetchAllTasks } from "./utils/utils.js";

import TaskForm from "./components/TaskForm.jsx";
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
        console.error("Fuck", err);
        setError("Failed to fetch tasks.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="App">
      <h1>My To-Do List</h1>
      <TaskForm />
      {loading ? <p>Loading...</p> : <TaskList tasks={tasks} />}
    </main>
  );
}

export default App;
