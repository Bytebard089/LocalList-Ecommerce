import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('userRole');

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!userId || role !== 'buyer') return;
    try {
      await setDoc(doc(db, 'carts', userId, 'items', product.id), {
        ...product,
        addedAt: new Date(),
      });
      alert("Added to cart!");
    } catch (err) {
      console.error("Add to cart failed:", err);
    }
  };

  if (loading) return <div className="pt-24 px-6">Loading...</div>;
  if (!product) return <div className="pt-24 px-6">Product not found</div>;

  return (
    <div className="min-h-screen pt-24 px-6 pb-16 font-[Poppins] bg-[#f9f9f6]">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-8 flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.title} className="w-full md:w-96 rounded-lg object-cover" />
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-teal-700 text-xl font-semibold">{product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <div className="bg-teal-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Seller Info</h3>
            <p><strong>Name:</strong> {product.sellerName}</p>
            <p><strong>City:</strong> {product.city}</p>
            <p><strong>Contact:</strong> {product.contact}</p>
          </div>

          {role === 'buyer' && (
            <button
              onClick={handleAddToCart}
              className="mt-4 px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
