import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import { Task } from "./TaskModel";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const submitTask = (event: React.FormEvent) => {
    event.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), task, isCompleted: false }]);
      setTask("");
    }
  };

  console.log(tasks);

  return (
    <div className="App">
      <h1 className="web__title">TaskScript</h1>
      <TaskInput
        task={task}
        setTask={setTask}
        submitTask={submitTask}
      ></TaskInput>
      <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
    </div>
  );
};

export default App;
