import React from "react";
import Paper from "@mui/material/Paper";
import { Task } from "../../TaskModel";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC = ({ tasks, setTasks }: Props) => {
  return <Paper>Hi</Paper>;
};

export default TaskList;
