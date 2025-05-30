import Task from "./../models/Tasks.js";
import catchAsync from "../utils/catchAsync.js";

// Method: GET
// ROUTE: /api/tasks
export const getAllTasks = catchAsync(async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json({
    status: "success",
    results: tasks.length,
    tasks,
  });
});

// Method: POST
// ROUTE: /api/tasks
export const createTask = catchAsync(async (req, res) => {
  const newTask = {
    title: req.body.title,
    description: req.body.description,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  const savedTask = await Task.create(newTask);

  res.status(201).json({
    status: "success",
    message: "Task created",
    task: savedTask,
  });
});

// Method: GET
// ROUTE: /api/tasks/:id
export const getTaskById = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const error = new Error("Task ID is required.");
    error.statusCode = 400;
    return next(error);
  }

  const task = await Task.findById(id);

  if (!task) {
    const error = new Error("No task found with that ID.");
    error.statusCode = 404;
    return next(error);
  }

  res.status(200).json({
    status: "success",
    task,
  });
});

// Method: PUT
// ROUTE: /api/tasks/:id
export const updateTask = catchAsync(async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(204).json({
      status: "fail",
      message: "No task found",
    });
  }

  const updates = {
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  };

  const updatedTask = await Task.findByIdAndUpdate(id, updates, {
    new: true,
  });

  if (!updatedTask) {
    return res.status(404).json({
      status: "fail",
      message: "Task not found",
    });
  }

  res.status(200).json({
    status: "success",
    task: updatedTask,
  });
});

// Method: DELETE
// ROUTE: /api/tasks/:id
export const deleteTask = catchAsync(async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(204).json({
      status: "fail",
      message: "No task found",
    });
  }

  await Task.findByIdAndDelete(id);

  res.status(204).json({
    status: "success",
    message: "Task deleted",
  });
});
