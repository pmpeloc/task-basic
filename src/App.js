import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
  };

  return (
    <div className='container'>
      <h1>Task Basic</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Ingrese la tarea'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit'>Agregar Tarea</button>
      </form>
      <div className='tasks-container'>
        {tasks.map((item, index) => (
          <div key={index} className='task-card'>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
