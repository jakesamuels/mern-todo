import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, "Task must have a title"],
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
