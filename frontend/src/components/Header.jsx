import { useState } from "react";
import TaskForm from "./TaskForm";
import CTAButton from "./CTAButton";

const Header = ({ onTaskAdded }) => {
  const [formOpen, setFormOpen] = useState(false);

  const handleClick = () => {
    setFormOpen((prev) => !prev);
  };

  return (
    <header
      style={{
        marginBottom: formOpen ? "12rem" : "4rem",
      }}
    >
      <h1>Stay Organized, Stay Ahead</h1>
      {!formOpen ? (
        <CTAButton handler={handleClick} bgColor="#fff">
          Add Task
        </CTAButton>
      ) : (
        <TaskForm
          onTaskAdded={onTaskAdded}
          onCloseMenu={handleClick}
          setFormOpen={setFormOpen}
        />
      )}
    </header>
  );
};

export default Header;
