import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput/TaskInput";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  return (
    <div className="App">
      <h1 className="web__title">TaskScript</h1>
      <TaskInput task={task} setTask={setTask}></TaskInput>
    </div>
  );
};

export default App;
