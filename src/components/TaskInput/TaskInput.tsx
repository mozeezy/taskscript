import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./taskinput.css";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  submitTask: (event: React.FormEvent) => void;
}

const TaskInput = ({ task, setTask, submitTask }: Props) => {
  return (
    <Box className="taskinput__container">
      <form className="textfield__form" onSubmit={submitTask}>
        <TextField
          id="standard-basic"
          label="Enter a task"
          variant="standard"
          className="textfield__input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Submit Task
        </Button>
      </form>
    </Box>
  );
};

export default TaskInput;
