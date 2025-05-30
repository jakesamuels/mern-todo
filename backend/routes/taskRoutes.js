import express from "express";
import {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

// Routes for /tasks
router.route("/tasks").get(getAllTasks).post(createTask);

// Routes for /tasks/:id
router.route("/tasks/:id").get(getTaskById).put(updateTask).delete(deleteTask);

export default router;
