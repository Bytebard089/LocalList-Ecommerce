import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function SellerDashboard() {
  const [sellerName, setSellerName] = useState('');
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Tribes India Handmade Blue Pottery Round Soap Dispenser",
      price: "₹499",
      image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/6597dc5f5f130b32398c10c5/1sptutirj00194-rnd-yellow-4--800x800.png",
    },
    {
      id: 2,
      title: "Clothikoo Women's Crop Top (Black, Flower Print)",
      price: "₹299",
      image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/g/adbf971a3f1e49d686ea8d552209571f/womens-crop-top-black-front-672ba172ddd16-800x800.jpeg",
    },
    {
      id: 3,
      title: "Men's Leather Blue Comfy Sneakers Casual Shoes",
      price: "₹1200",
      image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65ffe7265d034cca5af51762/img_20240208_143415_615-800x800.jpg",
      
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    orders: 0,
  });

  useEffect(() => {
    const fetchSellerName = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setSellerName(data.name || 'Seller');
        }
      }
    };

    fetchSellerName();
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert('Fill all fields');
      return;
    }
    setProducts([
      {
        ...newProduct,
        id: products.length + 1,
      },
      ...products,
    ]);
    setNewProduct({ name: '', price: '', image: '', orders: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fafc] to-[#edfdfd] pt-28 pb-20 px-6 font-[Poppins] text-gray-800">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-extrabold text-emerald-700 mb-2">
          Welcome, {sellerName}!
        </h1>
        <p className="text-gray-600">Manage your products and track your sales performance.</p>
      </div>

      {/* Add Product Form */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-14 border border-emerald-100">
        <h2 className="text-2xl font-bold text-emerald-700 mb-4">Add New Product</h2>
        <form className="grid md:grid-cols-3 gap-4" onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Product Name"
            className="border px-4 py-2 rounded-lg text-sm"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Price (e.g. ₹499)"
            className="border px-4 py-2 rounded-lg text-sm"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            className="border px-4 py-2 rounded-lg text-sm"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
          <button
            type="submit"
            className="col-span-full md:col-auto bg-teal-600 text-white py-2 rounded-lg font-medium hover:bg-teal-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-emerald-100 shadow-md hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-emerald-600 font-bold mt-1">{product.price}</p>
                <p className="text-sm text-gray-500 mt-1">Orders: {product.orders}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
