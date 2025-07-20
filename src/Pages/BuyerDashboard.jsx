import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { AiFillStar } from 'react-icons/ai';

const orders = [
  { id: 1, product: 'Handmade Clay Pottery', date: '2025-06-01', status: 'Delivered' },
  { id: 2, product: 'Organic Turmeric Powder', date: '2025-06-05', status: 'Shipped' },
];

const wishlist = [
  {
    name: 'Wall Decoration',
    image: 'https://images.meesho.com/images/products/478961301/ljzgb_512.webp',
    price: 499,
    mrp: 699,
    rating: 4.4,
    reviews: 120,
  },
  {
    name: 'Daniel Clark Handbag',
    image: 'https://images.meesho.com/images/products/194885424/hvchs_512.webp',
    price: 899,
    mrp: 999,
    rating: 4.2,
    reviews: 98,
  },
  {
    name: 'Women Fancy Dress',
    image: 'https://images.meesho.com/images/products/426443566/jvzf7_512.webp',
    price: 1099,
    mrp: 1399,
    rating: 4.6,
    reviews: 203,
  },
];

function BuyerDashboard() {
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) return;
      try {
        const querySnapshot = await getDocs(collection(db, 'carts', userId, 'items'));
        const cartItems = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCart(cartItems);
      } catch (err) {
        console.error('Failed to fetch cart:', err);
      }
    };

    fetchCart();
  }, [userId]);

  const deleteCartItem = async (itemId) => {
    try {
      await deleteDoc(doc(db, 'carts', userId, 'items', itemId));
      setCart(prev => prev.filter(item => item.id !== itemId));
    } catch (err) {
      console.error('Failed to delete item:', err);
    }
  };

  const renderCard = (product, isCart = false) => {
    const discount =
      product.mrp && product.price
        ? `${Math.round(((product.mrp - product.price) / product.mrp) * 100)}% off`
        : null;

    return (
      <div
        key={product.id || product.name}
        className="bg-white rounded-lg shadow-sm hover:shadow-lg hover:border hover:border-gray-400 transition duration-200 p-3 group relative"
      >
        <img
          src={product.image}
          alt={product.name || product.title}
          className="w-full h-40 object-contain mb-2"
        />

        <div className="text-sm text-gray-800 line-clamp-2 font-medium leading-tight">
          {product.name || product.title}
        </div>

        <div className="text-xs text-gray-500 mt-1">White, Cable Included</div>

        <div className="flex items-center text-xs font-semibold space-x-1 mt-1">
          <span className="bg-green-600 text-white px-2 py-[2px] rounded flex items-center gap-1">
            {(product.rating || 4.3).toFixed(1)} <AiFillStar className="text-yellow-300 text-xs" />
          </span>
          <span className="text-gray-500">({product.reviews || '180'})</span>
        </div>

        <div className="mt-1 flex items-center space-x-2">
          <span className="text-[#0f766e] font-bold text-md">₹{product.price}</span>
          {product.mrp && (
            <>
              <del className="text-gray-500 text-sm">₹{product.mrp}</del>
              <span className="text-green-600 font-semibold text-sm">{discount}</span>
            </>
          )}
        </div>

        {isCart && (
          <button
            onClick={() => deleteCartItem(product.id)}
            className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full hover:bg-red-600"
          >
            Remove
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#edf7f6] text-gray-800 font-[Poppins] px-6 pt-28 pb-10">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-teal-800 mb-2">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg text-gray-600">Explore, track & manage your shopping journey</p>
        </div>

        {/* Orders */}
        <section>
          <h2 className="text-2xl font-heading font-bold mb-6 text-teal-800 mb-6">📦 Recent Orders</h2>
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            {orders.map(order => (
              <div key={order.id} className="flex justify-between items-center border-b pb-4 last:border-none">
                <div>
                  <p className="font-medium">🛍️ {order.product}</p>
                  <p className="text-sm text-gray-500">Ordered on: {order.date}</p>
                </div>
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    order.status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Wishlist */}
        <section>
          <h2 className="text-2xl font-heading font-bold mb-6 text-teal-800 mb-6">💖 Wishlist</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {wishlist.map(item => renderCard(item))}
          </div>
        </section>

        {/* Cart */}
        <section>
          <h2 className="text-2xl font-heading font-bold mb-6 text-teal-800 mb-6">🛒 Your Cart</h2>
          {cart.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {cart.map(item =>
                renderCard(
                  {
                    ...item,
                    rating: item.rating || 4.3,
                    reviews: item.reviews || 100,
                  },
                  true
                )
              )}
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
