import { useState } from "react";
import TaskForm from "./TaskForm";

const Header = ({ onTaskAdded }) => {
  const [formOpen, setFormOpen] = useState(false);

  const handleClick = () => {
    setFormOpen((prev) => !prev);
  };

  return (
    <header
      style={{
        marginBottom: formOpen ? "10rem" : "4rem",
      }}
    >
      <h1>Stay Organized, Stay Ahead</h1>
      {!formOpen ? (
        <button onClick={handleClick}>Add Task</button>
      ) : (
        <TaskForm onTaskAdded={onTaskAdded} onCloseMenu={handleClick} />
      )}
    </header>
  );
};

export default Header;
