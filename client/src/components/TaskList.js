import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onUpdateTaskStatus, onDeleteTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onUpdateTaskStatus={onUpdateTaskStatus}
            onDeleteTask={onDeleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
