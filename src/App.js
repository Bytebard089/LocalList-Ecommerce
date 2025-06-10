import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';


import SellerDashboard from './Pages/SellerDashboard';
import BuyerDashboard from './Pages/BuyerDashboard';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar/>}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/seller" element={<SellerDashboard />} />
      <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
      <Route path="/blog" element={<Blog />} />       
      <Route path="/about" element={<About />} />  
      <Route path="/products" element={<Products />} />   
      <Route path="/product/:id" element={<ProductDetail />} />

    </Routes>


    </>
  );
}
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
