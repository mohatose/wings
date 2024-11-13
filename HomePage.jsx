import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import CSS for styling

function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to the wings inventory System</h1>
      <h3>select the page you would like to enter</h3>
      <div className="navigation-links">
        
        <Link to="/user-management" className="nav-link">User Management</Link>
        <Link to="/product-management" className="nav-link">Product Management</Link>
        
      </div>
    </div>
  );
}

export default HomePage;
