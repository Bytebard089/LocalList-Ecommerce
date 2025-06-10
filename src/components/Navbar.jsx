import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const role = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    navigate('/login');
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">VyapaarSetu</Link>
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          {role === 'buyer' && (
            <Link to="/dashboard/buyer" className="nav-link">Buyer Dashboard</Link>
          )}
          {role === 'seller' && (
            <Link to="/dashboard/seller" className="nav-link">Seller Dashboard</Link>
          )}
        </div>

        <div className="nav-buttons">
          {!role ? (
            <>
              <Link to="/login" className="btn-login">Login</Link>
              <Link to="/signup" className="btn-signup">Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="btn-login">Logout</button>
          )}
        </div>

        <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="nav-mobile-menu">
          <Link to="/" className="nav-link" onClick={() => setShowMenu(false)}>Home</Link>
          <Link to="/products" className="nav-link" onClick={() => setShowMenu(false)}>Products</Link>
          <Link to="/about" className="nav-link" onClick={() => setShowMenu(false)}>About</Link>
          <Link to="/blog" className="nav-link" onClick={() => setShowMenu(false)}>Blog</Link>
          {role === 'buyer' && (
            <Link to="/dashboard/buyer" className="nav-link" onClick={() => setShowMenu(false)}>Buyer Dashboard</Link>
          )}
          {role === 'seller' && (
            <Link to="/dashboard/seller" className="nav-link" onClick={() => setShowMenu(false)}>Seller Dashboard</Link>
          )}
          {role ? (
            <button onClick={() => { handleLogout(); setShowMenu(false); }} className="btn-login">Logout</button>
          ) : (
            <>
              <Link to="/login" className="nav-link" onClick={() => setShowMenu(false)}>Login</Link>
              <Link to="/signup" className="nav-link" onClick={() => setShowMenu(false)}>Signup</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
