import axios from "axios";

const BASE_URL = "http://localhost:8000/api/tasks";

// Fetch all tasks
export const fetchAllTasks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    const data = response.data;

    console.log(data);
    return data;
  } catch (err) {
    console.error("Error fetching tasks:", err);
    throw err;
  }
};
