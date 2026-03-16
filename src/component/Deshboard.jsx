import React, { useState } from 'react';

function Deshboard() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard-container">
      <h2>To-Do List</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Deshboard;
