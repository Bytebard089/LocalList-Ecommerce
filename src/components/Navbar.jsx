import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userId");
    setRole(null);
    navigate('/login');
  };

  const dashboardPath = role === 'seller' ? '/dashboard/seller' : '/dashboard/buyer';

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
          {role && (
            <Link to={dashboardPath} className="nav-link">Dashboard</Link>
          )}
        </div>

        <div className="nav-buttons">
          {!role ? (
            <>
              <Link to="/login" className="btn-login">Login</Link>
              <Link to="/signup" className="btn-signup">Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="btn-logout">Logout</button>
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
          {role && (
            <Link to={dashboardPath} className="nav-link" onClick={() => setShowMenu(false)}>Dashboard</Link>
          )}
          {role ? (
            <button onClick={() => { handleLogout(); setShowMenu(false); }} className="btn-logout">Logout</button>
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
