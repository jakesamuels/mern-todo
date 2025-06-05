import { useState } from "react";

import { useTaskContext } from "../context/TaskContext";

import { updateTask } from "../utils/utils";

import Form from "./Form";

const UpdateTaskModal = ({ setModalOpen, onTaskUpdated }) => {
  const { currentTask } = useTaskContext();
  const [updatedTitle, setUpdatedTitle] = useState(currentTask.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    currentTask.description
  );
  const [updating, setUpdatting] = useState(false);

  const handleClick = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setUpdatedTitle(value);
    } else {
      setUpdatedDescription(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdatting(true);

    try {
      const formData = {
        ...currentTask,
        title: updatedTitle,
        description: updatedDescription,
      };

      const updatedTask = await updateTask(currentTask._id, formData);

      onTaskUpdated(currentTask._id, updatedTask);

      setUpdatting(false);
      setModalOpen(false);
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  return (
    <div className="modal-container">
      <Form
        className="modal"
        title={updatedTitle}
        description={updatedDescription}
        handleClick={handleClick}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        bool={updating}
      />
    </div>
  );
};

export default UpdateTaskModal;
