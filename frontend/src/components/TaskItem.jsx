import { useState } from "react";
import { deleteTask } from "../utils/utils";

import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Spinner from "./Spinner";

const TaskItem = ({ task, onTaskDeleted }) => {
  const [completed, setCompleted] = useState(task.completed);
  const [deleting, setDeleting] = useState(false);

  const handleChange = () => {
    setCompleted(!completed);
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
          <input
            type="checkbox"
            name="completed"
            id="completed"
            value={task.completed}
            onChange={handleChange}
          />
          Mark as complete
        </label>
      </div>

      <div className="task-item__buttons">
        <button className="btn__edit-item">
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
