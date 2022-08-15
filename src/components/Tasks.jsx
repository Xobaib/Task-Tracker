import Task from "./Task";

const Tasks = ({ tasksProp, onDeleteProp, onToggle }) => {
  return (
    <>
      {tasksProp.map((task) => (
        <Task
          task={task}
          key={task.id}
          onDeleteProp={onDeleteProp}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
