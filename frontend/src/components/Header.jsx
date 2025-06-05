import { useState } from "react";
import { createTask } from "../utils/utils";
import { toast } from "react-toastify";

import Form from "./Form";
import CTAButton from "./CTAButton";

const Header = ({ onTaskAdded }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = () => {
    setFormOpen((prev) => !prev);
  };

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
    setSubmitting(true);

    try {
      const formData = {
        title,
        description,
      };

      const newTask = await createTask(formData);
      onTaskAdded(newTask);

      setTitle("");
      setDescription("");
      setFormOpen(false);
    } catch (error) {
      toast.error(error?.message || "Error creating the task.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <header
      style={{
        marginBottom: formOpen ? "12rem" : "4rem",
      }}
    >
      <h1>
        Stay Organized, <br /> Stay Ahead
      </h1>
      {!formOpen ? (
        <CTAButton handler={handleClick} bgColor="#fff">
          Add Task
        </CTAButton>
      ) : (
        <Form
          title={title}
          description={description}
          onTaskAdded={onTaskAdded}
          setFormOpen={setFormOpen}
          handleClick={handleClick}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          bool={submitting}
        />
      )}
    </header>
  );
};

export default Header;
