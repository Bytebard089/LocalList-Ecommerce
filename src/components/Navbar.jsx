import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const role = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-[Inter]">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="overflow-visible">
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-[#065f46] to-[#047857] bg-clip-text text-transparent font-[Pacifico] tracking-wider hover:scale-105 transform transition-all duration-300 pl-1 sm:pl-2"
          >
            VyapaarSetu
          </Link>

        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {['Home', 'Products', 'About', 'Blog'].map((page) => (
            <Link
              key={page}
              to={`/${page.toLowerCase() === 'home' ? '' : page.toLowerCase()}`}
              className="relative text-gray-700 hover:text-teal-700 text-[17px] font-medium transition duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-teal-700 hover:after:w-full after:transition-all after:duration-300"
            >
              {page}
            </Link>
          ))}
          {role === 'buyer' && (
            <Link
              to="/dashboard/buyer"
              className="relative text-gray-700 hover:text-teal-700 text-[17px] font-medium transition duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-teal-700 hover:after:w-full after:transition-all after:duration-300"
            >
              Buyer Dashboard
            </Link>
          )}
          {role === 'seller' && (
            <Link
              to="/dashboard/seller"
              className="relative text-gray-700 hover:text-teal-700 text-[17px] font-medium transition duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-teal-700 hover:after:w-full after:transition-all after:duration-300"
            >
              Seller Dashboard
            </Link>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-3">
          {!role ? (
            <>
              <Link
                to="/login"
                className="px-5 py-2 border border-teal-700 text-teal-700 rounded-full hover:bg-teal-50 transition font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-full shadow-md hover:shadow-lg hover:from-teal-700 hover:to-green-700 transition font-medium"
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 border border-rose-600 text-rose-600 rounded-full hover:bg-rose-50 transition font-medium"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-3xl text-teal-700 cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden px-6 py-4 bg-white border-t flex flex-col gap-4">
          {['Home', 'Products', 'About', 'Blog'].map((page) => (
            <Link
              key={page}
              to={`/${page.toLowerCase() === 'home' ? '' : page.toLowerCase()}`}
              className="text-gray-700 hover:text-teal-700"
              onClick={() => setShowMenu(false)}
            >
              {page}
            </Link>
          ))}
          {role === 'buyer' && (
            <Link
              to="/dashboard/buyer"
              className="text-gray-700 hover:text-teal-700"
              onClick={() => setShowMenu(false)}
            >
              Buyer Dashboard
            </Link>
          )}
          {role === 'seller' && (
            <Link
              to="/dashboard/seller"
              className="text-gray-700 hover:text-teal-700"
              onClick={() => setShowMenu(false)}
            >
              Seller Dashboard
            </Link>
          )}
          {!role ? (
            <>
              <Link to="/login" onClick={() => setShowMenu(false)} className="text-teal-700">
                Login
              </Link>
              <Link to="/signup" onClick={() => setShowMenu(false)} className="text-teal-700">
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setShowMenu(false);
              }}
              className="text-rose-600"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
