import { useState, useEffect } from "react";
import { fetchAllTasks } from "./utils/utils.js";
import { toast } from "react-toastify";

import Header from "./components/Header.jsx";
import TaskList from "./components/TaskList.jsx";
import UpdateTaskModal from "./components/UpdateTaskModal.jsx";
import Loading from "./components/Loading.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    try {
      const tasks = await fetchAllTasks();
      setTasks(tasks);
    } catch (err) {
      toast.error(err?.message || "Failed to fetch tasks.");
    } finally {
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
        <Loading bool={loading} />
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
