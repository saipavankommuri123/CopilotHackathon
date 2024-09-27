import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-profile">
        <span>Welcome, Sai</span>
        <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
      </div>
    </nav>
  );
};

export default Navbar;