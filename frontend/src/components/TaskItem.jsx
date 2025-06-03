import { useState } from "react";
import { deleteTask, updateTask } from "../utils/utils";
import { useTaskContext } from "../context/TaskContext";
import { toast } from "react-toastify";

import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Spinner from "./Spinner";

const TaskItem = ({ task, setModalOpen, onTaskDeleted }) => {
  const [completed, setCompleted] = useState(task.completed);
  const [deleting, setDeleting] = useState(false);
  const { setCurrentTask } = useTaskContext();

  const handleCompletedStatus = async () => {
    const newCompletedStatus = !completed;
    setCompleted(newCompletedStatus);

    try {
      await updateTask(task._id, { completed: newCompletedStatus });
    } catch (error) {
      setCompleted(!newCompletedStatus); // rollback
      toast.error(
        error?.message || "An error occurred while changing the status."
      );
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure?");

    if (!confirmed) return;

    setDeleting(true);

    try {
      await deleteTask(id);
      onTaskDeleted();
    } catch (error) {
      toast.error(error?.message || "Failed to delete the task.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <li className="task-item">
      <div>
        <span className="task-item__title">{task.title}</span>
        <p className="task-item__description">{task.description}</p>
        <label htmlFor="completed" className="label__checkbox">
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              name="completed"
              id="completed"
              checked={completed}
              onChange={handleCompletedStatus}
              className="marker"
            />
          </div>
          Mark as complete
        </label>
      </div>

      <div className="task-item__buttons">
        <button
          className="btn__edit-item"
          onClick={() => {
            setCurrentTask(task);
            setModalOpen(true);
          }}
        >
          <FaRegEdit />
        </button>
        <button
          className="btn__delete-item"
          onClick={() => handleDelete(task._id)}
          disabled={deleting}
        >
          {deleting ? (
            <Spinner color="#dc3545" bool={deleting} />
          ) : (
            <FaRegTrashAlt />
          )}
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
