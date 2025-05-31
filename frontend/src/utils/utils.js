import axios from "axios";

const BASE_URL = "http://localhost:8000/api/tasks";

// Fetch all tasks
export const fetchAllTasks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    const data = response.data.tasks;

    return data;
  } catch (err) {
    console.error("Error fetching tasks:", err);
    throw err;
  }
};

// Create new task
export const createTask = async (formData) => {
  try {
    const response = await axios({
      method: "POST",
      data: formData,
      url: BASE_URL,
    });

    const newTaskFromServer = await response.data.task;

    return newTaskFromServer;
  } catch (err) {
    console.error("Error creating task:", err);
    throw err;
  }
};
