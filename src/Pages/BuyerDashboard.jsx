import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const orders = [
  { id: 1, product: 'Handmade Clay Pottery', date: '2025-06-01', status: 'Delivered' },
  { id: 2, product: 'Organic Turmeric Powder', date: '2025-06-05', status: 'Shipped' },
];

const wishlist = [
  { name: 'Wall Decoration ', image: 'https://images.meesho.com/images/products/478961301/ljzgb_512.webp' },
  { name: 'Daniel Clark Handbag ', image: 'https://images.meesho.com/images/products/194885424/hvchs_512.webp' },
  { name: 'Women Fancy Dress', image: 'https://images.meesho.com/images/products/426443566/jvzf7_512.webp' },
];

function BuyerDashboard() {
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) return;
      try {
        const querySnapshot = await getDocs(collection(db, 'carts', userId, 'items'));
        const cartItems = querySnapshot.docs.map(doc => doc.data());
        setCart(cartItems);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };

    fetchCart();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#edf7f6] text-gray-800 font-[Poppins] px-6 pt-28 pb-10">

      <div className="max-w-7xl mx-auto space-y-14">
        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-2">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg text-gray-600">Explore, track & manage your shopping journey</p>
        </div>

        {/* Orders Section */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-700 mb-6">📦 Recent Orders</h2>
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            {orders.map(order => (
              <div key={order.id} className="flex justify-between items-center border-b pb-4 last:border-none">
                <div>
                  <p className="font-medium">🛍️ {order.product}</p>
                  <p className="text-sm text-gray-500">Ordered on: {order.date}</p>
                </div>
                <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Wishlist Section */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-700 mb-6">💖 Wishlist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishlist.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-transform transform hover:scale-105">
                <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
                <div className="p-4 text-center">
                  <p className="font-semibold text-gray-700">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cart Section */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-700 mb-6">🛒 Your Cart</h2>
          {cart.length > 0 ? (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-teal-100 text-teal-800 text-sm">
                  <tr>
                    <th className="p-4">Product</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Added On</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {cart.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-4">{item.title}</td>
                      <td className="p-4">{item.price}</td>
                      <td className="p-4">{new Date(item.addedAt?.seconds * 1000).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-gray-500 text-center bg-white py-8 rounded-lg shadow">
              Your cart is empty.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default BuyerDashboard;
