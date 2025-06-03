import TaskItem from "./TaskItem";

const TaskList = ({ tasks, modalOpen, setModalOpen, onTaskDeleted }) => {
  if (tasks.length === 0)
    return (
      <p
        style={{
          textAlign: "center",
          fontSize: "1.25rem",
          fontWeight: "600",
        }}
      >
        Start adding tasks
      </p>
    );

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          onTaskDeleted={onTaskDeleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;
