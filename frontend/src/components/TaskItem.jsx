import { useState } from "react";
import { deleteTask, updateTask } from "../utils/utils";
import { useTaskContext } from "../context/TaskContext";

import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Spinner from "./Spinner";

const TaskItem = ({ task, setModalOpen, onTaskDeleted }) => {
  const [completed, setCompleted] = useState(task.completed);
  const [deleting, setDeleting] = useState(false);
  const { setCurrentTask } = useTaskContext();

  const handleChangeCompleted = async () => {
    try {
      const newCompletedStatus = !completed;
      setCompleted(newCompletedStatus);

      await updateTask(task.id, { completed: newCompletedStatus });
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      setDeleting(true);
      await deleteTask(id);
      onTaskDeleted(id);
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
              onChange={handleChangeCompleted}
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
