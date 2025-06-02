import { useState, useEffect } from "react";
import { fetchAllTasks } from "./utils/utils.js";

import Header from "./components/Header.jsx";
import TaskList from "./components/TaskList.jsx";
import UpdateTaskModal from "./components/UpdateTaskModal.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  useEffect(() => {
    fetchData();
  }, []);

  const handleRerender = () => {
    fetchData();
  };

  return (
    <main className="App">
      <Header onTaskAdded={handleRerender} />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <TaskList
          tasks={tasks}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          onTaskDeleted={handleRerender}
        />
      )}
      {modalOpen && (
        <UpdateTaskModal
          setModalOpen={setModalOpen}
          onTaskUpdated={handleRerender}
        />
      )}
    </main>
  );
}

export default App;
