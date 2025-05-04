import React from 'react';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">

      <section className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to VyapaarSetu</h1>
        <p className="text-gray-600 max-w-xl mx-auto">Connecting local sellers with conscious buyers. Made for Bharat.</p>
      </section>

      <footer className="bg-white border-t border-gray-200 text-gray-600 text-sm py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} VyapaarSetu. Made in Bharat.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-600 transition">Home</a>
            <a href="#" className="hover:text-emerald-600 transition">Products</a>
            <a href="#" className="hover:text-emerald-600 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
