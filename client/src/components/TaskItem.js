import React from 'react';

function TaskItem({ task, onUpdateTaskStatus, onDeleteTask }) {
  const handleStatusToggle = () => {
    const newStatus = task.status === 'Pending' ? 'Completed' : 'Pending';
    onUpdateTaskStatus(task._id, newStatus);
  };

  return (
    <div className={`task-item ${task.status.toLowerCase()}`}>
      <span>{task.title}</span>
      <div className="task-actions">
        <button onClick={handleStatusToggle}>
          {task.status === 'Pending' ? '✔️ Complete' : '↩️ Pending'}
        </button>
        <button onClick={() => onDeleteTask(task._id)}>🗑️ Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
