import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-inter">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-pacifico text-teal-700 tracking-wide">
          VyapaarSetu
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-[17px]">
          <NavLink to="/" label="Home" />
          <NavLink to="/products" label="Products" />
          <NavLink to="/about" label="About" />
          <NavLink to="/blog" label="Blog" />
          {role === 'buyer' && <NavLink to="/dashboard/buyer" label="Buyer Dashboard" />}
          {role === 'seller' && <NavLink to="/dashboard/seller" label="Seller Dashboard" />}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          {!role ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-teal-600 rounded-xl text-teal-600 hover:bg-teal-50 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl shadow hover:brightness-110 transition"
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-rose-500 text-rose-600 rounded-xl hover:bg-rose-50 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-3xl text-teal-700 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-3 text-[16px]">
          <NavLink to="/" label="Home" closeMenu={() => setShowMenu(false)} />
          <NavLink to="/products" label="Products" closeMenu={() => setShowMenu(false)} />
          <NavLink to="/about" label="About" closeMenu={() => setShowMenu(false)} />
          <NavLink to="/blog" label="Blog" closeMenu={() => setShowMenu(false)} />
          {role === 'buyer' && (
            <NavLink to="/dashboard/buyer" label="Buyer Dashboard" closeMenu={() => setShowMenu(false)} />
          )}
          {role === 'seller' && (
            <NavLink to="/dashboard/seller" label="Seller Dashboard" closeMenu={() => setShowMenu(false)} />
          )}
          {!role ? (
            <>
              <Link to="/login" className="block text-teal-600" onClick={() => setShowMenu(false)}>Login</Link>
              <Link to="/signup" className="block text-teal-600" onClick={() => setShowMenu(false)}>Signup</Link>
            </>
          ) : (
            <button onClick={() => { handleLogout(); setShowMenu(false); }} className="text-rose-600">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ to, label, closeMenu }) => (
  <Link
    to={to}
    onClick={closeMenu}
    className="relative group text-gray-700 hover:text-teal-600 transition"
  >
    {label}
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-500 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

export default Navbar;
