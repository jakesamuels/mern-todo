import TaskItem from "./TaskItem";

const TaskList = ({ tasks, modalOpen, setModalOpen, onTaskDeleted }) => {
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
