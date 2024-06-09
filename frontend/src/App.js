import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';
import EditTask from './components/EditTask';
import TaskDetail from './components/TaskDetail';

const App = () => {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Task Management Application</h1>
        </header>
        <Routes>
          <Route exact path="/" element={<TaskList />} />
          <Route path="/add" element={<NewTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;