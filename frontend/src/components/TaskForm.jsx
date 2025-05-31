import { useState } from "react";
import axios from "axios";

const TaskForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting form");
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
