import { useState } from "react";

const TaskItem = ({ task }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleChange = () => {
    setCompleted(!completed);
  };

  return (
    <li className="task-item">
      <span className="task-item__title">{task.title}</span>
      <p className="task-item__description">{task.description}</p>
      <input
        type="checkbox"
        name="completed"
        value={task.completed}
        onChange={handleChange}
      />

      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
