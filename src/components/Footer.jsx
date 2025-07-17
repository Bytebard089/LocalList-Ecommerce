import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#e6f4f2] text-[#0f766e] py-12 px-6 font-[Inter]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide mb-3 font-[Winky Rough] text-[#0f766e]">
            VyapaarSetu
          </h1>
          <p className="text-sm text-teal-900 leading-relaxed">
            A platform to empower Bharat’s sellers and buyers with transparency and trust.
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-teal-800">
            <li><Link to="#" className="hover:underline">Help Center</Link></li>
            <li><Link to="#" className="hover:underline">Contact Us</Link></li>
            <li><Link to="#" className="hover:underline">Shipping Info</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-teal-800">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="#" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-sm text-teal-800">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-600 text-xs mt-10">
        © {new Date().getFullYear()} <span className="font-semibold">VyapaarSetu</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
