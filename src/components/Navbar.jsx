import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-teal-600">
        <Link to="/">VyapaarSetu</Link>
      </div>
      <div className="flex items-center gap-8">
        <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors">Home</Link>
        <Link to="/products" className="text-gray-700 hover:text-teal-600 transition-colors">Products</Link>
        <Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors">About</Link>
        <Link to="/blog" className="text-gray-700 hover:text-teal-600 transition-colors">Blog</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="px-5 py-2 backdrop-blur-md border border-teal-600 text-teal-700 rounded-xl shadow-inner hover:bg-teal-50 transition-all"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-5 py-2 bg-gradient-to-r from-teal-500 to-green-400 text-white rounded-xl shadow-md hover:shadow-lg hover:from-teal-600 hover:to-green-500 transition-all"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
