import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">VyapaarSetu</Link>
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
        </div>

        <div className="nav-buttons">
          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/signup" className="btn-signup">Signup</Link>
        </div>

        <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </div>
      </div>

      {showMenu && (
        <div className="nav-mobile-menu">
          <Link to="/" className="nav-link" onClick={() => setShowMenu(false)}>Home</Link>
          <Link to="/products" className="nav-link" onClick={() => setShowMenu(false)}>Products</Link>
          <Link to="/about" className="nav-link" onClick={() => setShowMenu(false)}>About</Link>
          <Link to="/blog" className="nav-link" onClick={() => setShowMenu(false)}>Blog</Link>
          <Link to="/login" className="nav-link" onClick={() => setShowMenu(false)}>Login</Link>
          <Link to="/signup" className="nav-link" onClick={() => setShowMenu(false)}>Signup</Link>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
