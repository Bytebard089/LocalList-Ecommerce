import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc, getDocs, doc, getDoc, deleteDoc, query, where } from 'firebase/firestore';

function SellerDashboard() {
  const [sellerName, setSellerName] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    image: '',
    description: '',
  });

  const salesStats = {
    totalSold: 128,
    totalRevenue: 56500,
    buyers: 36,
  };

  const salesRecords = [
    { buyer: 'Ravi Sharma', product: 'Handcrafted Pottery', date: '2025-07-10', amount: 499 },
    { buyer: 'Pooja Verma', product: 'Jute Bag', date: '2025-07-08', amount: 349 },
    { buyer: 'Aman Gupta', product: 'Organic Turmeric', date: '2025-07-06', amount: 229 },
  ];

  useEffect(() => {
    const fetchSellerInfoAndProducts = async () => {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        setSellerId(uid);

        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setSellerName(data.name || 'Seller');
          localStorage.setItem('sellerName', data.name);
        }

        const q = query(collection(db, 'products'), where('sellerId', '==', uid));
        const snapshot = await getDocs(q);
        const productList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productList);
      }
    };

    fetchSellerInfoAndProducts();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const { title, price, image, description } = newProduct;
    if (!title || !price || !image || !description) {
      alert('Please fill all fields');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'products'), {
        ...newProduct,
        sellerId,
        sellerName,
      });
      setProducts([{ id: docRef.id, ...newProduct, sellerId, sellerName }, ...products]);
      setNewProduct({ title: '', price: '', image: '', description: '' });
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Delete this product?')) return;

    try {
      await deleteDoc(doc(db, 'products', productId));
      setProducts(products.filter((product) => product.id !== productId));
    } catch (err) {
      console.error('Error deleting product:', err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fafc] to-[#edfdfd] pt-28 pb-20 px-6 font-[Poppins] text-gray-800">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Welcome */}
        <div>
          <h1 className="text-4xl font-extrabold text-emerald-700 mb-2">Welcome, {sellerName}!</h1>
          <p className="text-gray-600">Manage your products, sales, and track performance.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500">
            <h3 className="text-2xl font-bold text-emerald-700">{salesStats.totalSold}+</h3>
            <p className="text-sm text-gray-600">Products Sold</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500">
            <h3 className="text-2xl font-bold text-emerald-700">₹{salesStats.totalRevenue}</h3>
            <p className="text-sm text-gray-600">Total Revenue</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500">
            <h3 className="text-2xl font-bold text-emerald-700">{salesStats.buyers}+</h3>
            <p className="text-sm text-gray-600">Happy Buyers</p>
          </div>
        </div>

        {/* Sales Record */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">📊 Sales Records</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow border">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-teal-100 text-gray-700">
                <tr>
                  <th className="px-6 py-3">Buyer</th>
                  <th className="px-6 py-3">Product</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {salesRecords.map((record, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-6 py-3">{record.buyer}</td>
                    <td className="px-6 py-3">{record.product}</td>
                    <td className="px-6 py-3">{record.date}</td>
                    <td className="px-6 py-3">₹{record.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Product Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100">
          <h2 className="text-xl font-bold text-emerald-700 mb-4">Add New Product</h2>
          <form className="grid md:grid-cols-2 gap-4" onSubmit={handleAddProduct}>
            <input
              type="text"
              placeholder="Title"
              className="border px-4 py-2 rounded"
              value={newProduct.title}
              onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Price"
              className="border px-4 py-2 rounded"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="border px-4 py-2 rounded"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <textarea
              placeholder="Description"
              rows={3}
              className="border px-4 py-2 rounded md:col-span-2"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            ></textarea>
            <button
              type="submit"
              className="col-span-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
            >
              Add Product
            </button>
          </form>
        </div>

        {/* Product Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md border hover:shadow-lg transition relative"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-full object-contain p-4 bg-[#f9fafb] rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">{product.title}</h3>
                  <p className="text-emerald-600 font-semibold mt-1">₹{product.price}</p>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </div>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default SellerDashboard;
