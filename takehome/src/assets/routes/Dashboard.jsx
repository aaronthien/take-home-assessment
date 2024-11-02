import React from 'react';
import SIdebar from '../../components/SIdebar';
import MainDetails from '../../components/MainDetails';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SIdebar />
      <div className="dashboard-main-content">
        <MainDetails />
      </div>
    </div>
  );
};

export default Dashboard;
