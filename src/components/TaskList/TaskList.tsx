import React from "react";
import Paper from "@mui/material/Paper";
import { Task } from "../../TaskModel";
import "./tasklist.css";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, setTasks }: Props) => {
  const completeTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="task__list__container">
      {tasks.map((task) => (
        <Paper key={task.id} className="task__card" elevation={3}>
          {task.isCompleted ? <s>{task.task}</s> : <span>{task.task}</span>}
          <div className="task__icons">
            {task.isCompleted ? (
              <RxCross2
                style={{ marginRight: "0.5rem" }}
                onClick={() => completeTask(task.id)}
              />
            ) : (
              <FaCheck
                style={{ marginRight: "0.5rem" }}
                onClick={() => completeTask(task.id)}
              />
            )}

            <MdDelete />
          </div>
        </Paper>
      ))}
    </div>
  );
};

export default TaskList;
