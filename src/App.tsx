import * as React from 'react';
import './App.css';
import TextField from './components/TaskInput/TaskInput';


const App:React.FC = () => {
  return (
    <div className="App">
      <h1 className="web__title">TaskScript</h1>
      <TextField></TextField>
    </div>
  );
}

export default App;
