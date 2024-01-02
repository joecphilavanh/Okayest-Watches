import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/mens" className="navbar-link">Mens</Link></li>
        <li><Link to="/womens" className="navbar-link">Womens</Link></li>
        <li><Link to="/login" className="navbar-link">Login</Link></li>
        <li><Link to="/signUp" className="navbar-link">Sign up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;