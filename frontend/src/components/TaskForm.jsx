import { useState } from "react";
import { createTask } from "../utils/utils";

import CTAButton from "./CTAButton";
import DotLoader from "./BeatLoader";

const TaskForm = ({ onTaskAdded, onCloseMenu, setFormOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

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

    setSubmitting(true);

    const newTask = await createTask(formData);
    onTaskAdded(newTask);

    setTitle("");
    setDescription("");
    setSubmitting(false);
    setFormOpen(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <button type="button" className="btn__close-form" onClick={onCloseMenu}>
        X
      </button>
      <label htmlFor="form__title">Task:</label>
      <input
        type="text"
        id="form__title"
        name="title"
        className="form__title"
        value={title}
        onChange={handleChange}
        placeholder="What do you need to get done?"
        required
      />

      <label htmlFor="form__description">
        Description: <small>(optional)</small>
      </label>

      <textarea
        id="form__description"
        name="description"
        className="form__description"
        value={description}
        onChange={handleChange}
        placeholder="Add details, steps, or reminders..."
      ></textarea>

      <CTAButton
        className="btn__submit-form"
        bgColor="#edecec"
        disabled={submitting}
      >
        {submitting ? <DotLoader bool={submitting} /> : "Add Task"}
      </CTAButton>
    </form>
  );
};

export default TaskForm;
