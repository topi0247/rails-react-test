import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      console.log(process.env.REACT_APP_API_URL);
      const res = await fetch(process.env.REACT_APP_API_URL);
      const data = await res.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div className="text-center m-auto p-10">
      <h1 className='text-2xl'>Hello World!!!!</h1>
      <section>
        <p>this is test</p>
        <button
          className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
          Button
        </button>
        {
          tasks.map((task, index) => (
            <div key={index}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default App;
