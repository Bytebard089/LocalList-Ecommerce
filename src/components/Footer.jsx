import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#d6ecea] text-[#0f766e] border-t border-teal-200 font-[Inter]">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        
        <div>
          <h1 className="text-2xl font-bold mb-3 font-[Winky Rough] text-[#0f766e]">VyapaarSetu</h1>
          <p className="text-sm text-teal-900 leading-relaxed">
            Empowering Bharat’s local sellers and buyers with transparency, trust, and technology.
          </p>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-teal-900">
            <li><Link to="#" className="hover:underline">Help Center</Link></li>
            <li><Link to="#" className="hover:underline">Contact Us</Link></li>
            <li><Link to="#" className="hover:underline">Shipping Info</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-teal-900">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="#" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Connect With Us</h3>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-teal-900 hover:text-[#0f766e]" aria-label="Instagram">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="text-teal-900 hover:text-[#0f766e]" aria-label="LinkedIn">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a href="#" className="text-teal-900 hover:text-[#0f766e]" aria-label="Twitter">
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-[13px] text-gray-600 py-4 border-t border-teal-200">
        © {new Date().getFullYear()} <span className="font-semibold text-[#0f766e]">VyapaarSetu</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
