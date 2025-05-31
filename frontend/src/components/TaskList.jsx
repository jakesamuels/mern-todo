import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onTaskDeleted }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onTaskDeleted={onTaskDeleted} />
      ))}
    </ul>
  );
};

export default TaskList;
