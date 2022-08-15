// we can use "react icons" because we have install it alredy with this command (npm i react-icons):
//1- first import icon that we want to use, from this module:
//import { FaTimes } from "react-icons/fa";
//2- then use this component where we want, in jsx part:
//<FaTimes style={{ color: "red", cursor: "pointer" }} />

// also we could use "fontawesome cdn" by adding the "cdn link" to "index.html" file in "public" folder wich was the easies way.

// but i used fontawesome libraries:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, onDeleteProp, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder === true ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FontAwesomeIcon
          icon={faXmark}
          style={{ color: "red" }}
          onClick={() => onDeleteProp(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
