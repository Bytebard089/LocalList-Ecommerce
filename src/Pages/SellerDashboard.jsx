import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from 'firebase/firestore';

function SellerDashboard() {
  const [sellerName, setSellerName] = useState('');
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    image: '',
    orders: 0,
  });

  useEffect(() => {
    const fetchSellerData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setSellerName(userData.name || 'Seller');
        }

        const q = query(collection(db, 'products'), where('sellerId', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const sellerProducts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(sellerProducts);
      }
    };

    fetchSellerData();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!newProduct.title || !newProduct.price || !newProduct.image) {
      alert('Please fill all fields');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'products'), {
        ...newProduct,
        sellerId: user.uid,
        sellerName,
        timestamp: new Date(),
      });

      setProducts([
        { ...newProduct, id: docRef.id, orders: 0 },
        ...products,
      ]);

      setNewProduct({ title: '', price: '', image: '', orders: 0 });
    } catch (err) {
      console.error('Error adding product:', err.message);
      alert('Failed to add product');
    }
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
            placeholder="Product Title"
            className="border px-4 py-2 rounded-lg text-sm"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct({ ...newProduct, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Price (e.g. ₹499)"
            className="border px-4 py-2 rounded-lg text-sm"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            className="border px-4 py-2 rounded-lg text-sm"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
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
        {products.length === 0 ? (
          <p className="text-gray-500">No products added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-emerald-100 shadow-md hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-full object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-emerald-600 font-bold mt-1">
                    {product.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Orders: {product.orders || 0}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SellerDashboard;
