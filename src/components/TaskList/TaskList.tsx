import React from "react";
import Paper from "@mui/material/Paper";
import { Task } from "../../TaskModel";
import "./tasklist.css";
import { MdDelete } from "react-icons/md";

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
          <MdDelete />
        </Paper>
      ))}
    </div>
  );
};

export default TaskList;
