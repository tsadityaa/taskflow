import React, { useState, useEffect } from 'react';
import './index.css';
import { getTasks, createTask, updateTaskStatus, deleteTask } from './services/taskService';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const taskList = await getTasks();
    setTasks(taskList);
  };

  const handleAddTask = async (title) => {
    const newTask = await createTask(title);
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTaskStatus = async (id, status) => {
    const updatedTask = await updateTaskStatus(id, status);
    setTasks(tasks.map(task => (task._id === id ? updatedTask : task)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div className="App">
      <h1>TaskFlow</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onUpdateTaskStatus={handleUpdateTaskStatus}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
