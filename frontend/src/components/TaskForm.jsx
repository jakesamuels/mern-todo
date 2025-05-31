import { useState } from "react";
import { createTask } from "../utils/utils";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setDescription(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
    };

    const newTask = await createTask(formData);
    onTaskAdded(newTask);

    setTitle("");
    setDescription("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="form__title">Task:</label>
      <input
        type="text"
        id="form__title"
        name="title"
        className="form__title"
        value={title}
        onChange={handleChange}
      />

      <label htmlFor="form__description">Description:</label>
      <input
        type="text"
        id="form__description"
        name="description"
        className="form__description"
        value={description}
        onChange={handleChange}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
