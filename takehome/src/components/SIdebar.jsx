import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const SIdebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login'); 
  };

  return (
    <div className="dashboard-sidebar">
      <div className="dashboard-header">My Dashboard</div>
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Settings</a></li>
        <li>
          <button className="btn btn-secondary mt-4" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SIdebar;
