import { useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const TaskItem = ({ task }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleChange = () => {
    setCompleted(!completed);
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
        <button className="btn__delete-item">
          <FaRegTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
