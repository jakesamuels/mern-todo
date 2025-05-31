import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
