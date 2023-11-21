import React from "react";
import Paper from "@mui/material/Paper";
import { Task } from "../../TaskModel";
import "./tasklist.css";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, setTasks }: Props) => {
  return (
    <div className="task__list__container">
      {tasks.map((task) => (
        <Paper key={task.id} className="task__card" elevation={3}>
          {task.task}
          <div className="task__icons">
            <FaCheck style={{ marginRight: "0.5rem" }} />
            <MdDelete />
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default TaskList;
