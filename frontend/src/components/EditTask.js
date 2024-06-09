import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const result = await axios.get(`http://localhost:5000/tasks/${id}`);
      setTitle(result.data.title);
      setDescription(result.data.description);
      setDueDate(result.data.dueDate);
    };
    fetchTask();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { title, description, dueDate };
    await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <div>
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;