import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  return (
    <li>
      <Link to={`/tasks/${task._id}`}>
        {task.title}
      </Link>
      <Link to={`/edit/${task._id}`}>Edit</Link>
    </li>
  );
};

export default TaskItem;