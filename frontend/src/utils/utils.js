import axios from "axios";

const BASE_URL =
  "https://mern-todo-nrzh.onrender.com/api/tasks" ||
  "http://localhost:8000/api/tasks";

// Fetch all tasks
export const fetchAllTasks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    const data = response.data.tasks;

    return data;
  } catch (err) {
    console.error("Error fetching tasks:", err);
    throw new Error("Server error fetching tasks");
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
    throw new Error("Server error creating tasks");
  }
};

// Delete task
export const deleteTask = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (err) {
    console.error("Error deleting task:", err);
    throw new Error("Server error deleting tasks");
  }
};

// Update task
export const updateTask = async (id, formData) => {
  try {
    const response = await axios({
      method: "PUT",
      data: formData,
      url: `${BASE_URL}/${id}`,
    });

    const updatedTaskFromServer = await response.data.task;
    return updatedTaskFromServer;
  } catch (err) {
    console.error("Error updating task:", err);
    throw new Error("Server error updating tasks");
  }
};
