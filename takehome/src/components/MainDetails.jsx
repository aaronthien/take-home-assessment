import React, { useState } from 'react';
import './MainDetails.css';
import ordersData from './orderData';

const MainDetails = () => {
  const [orders, setOrders] = useState(ordersData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleStatusChange = (index, newStatus) => {
    const updatedOrders = orders.map((order, i) =>
      i === index ? { ...order, status: newStatus } : order
    );

    updatedOrders.sort((a, b) => {
      if (a.status === 'Delivered' && b.status !== 'Delivered') {
        return -1;
      } else if (a.status !== 'Delivered' && b.status === 'Delivered') {
        return 1;
      }
      return 0;
    });

    setOrders(updatedOrders);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter orders based on the search query
  const filteredOrders = orders.filter((order) =>
    order.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-details">
      <h1 className="main-details-title">Main Content</h1>
      <div className="big-box">
        <div className="row first-row">
          <div className="small-box">🗺️</div>
          <div className="small-box">🗺️</div>
          <div className="small-box">🗺️</div>
          <div className="small-box">🗺️</div>
        </div>
        <div className="row second-row">
          <div className="medium-box"></div>
        </div>
        <div className="row third-row">
          <div className="large-box">
            <div className="table-header">
              <h2>Tracking Order</h2>
              <div className="table-controls">
                <input
                  type="text"
                  placeholder="Search by Order ID..."
                  className="search-bar"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button className="filter-btn">Filter</button>
                <button className="export-btn">Exports</button>
              </div>
            </div>
            <table className="tracking-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Category</th>
                  <th>Arrival Time</th>
                  <th>Weight</th>
                  <th>Route</th>
                  <th>Fee</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.id}</td>
                    <td>{order.category}</td>
                    <td>{order.arrivalTime}</td>
                    <td>{order.weight}</td>
                    <td>{order.route}</td>
                    <td>{order.fee}</td>
                    <td className={`status-cell ${order.status.toLowerCase()}`}>
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(index, e.target.value)}
                        className="status-select"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Shipping">Shipping</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
