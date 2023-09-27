// src/App.js
import { useState } from 'react';
import CreateTask from './components/CreateTask';
import ListTask from './components/ListTask';

function App() {
  const [tasks, setTasks] = useState([]);

  console.log('tasks', tasks);

  return (
    <>
      <div className='bg-slate-100 w-screen h-screen flex flex-col items-center pt-3 gap-16'>
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTask tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
