import React from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { AiFillStar } from 'react-icons/ai';

function ProductDetail() {
  const { id } = useParams();
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
        setLoading(false);
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
      alert("✅ Added to cart!");
    } catch (err) {
      console.error("Add to cart failed:", err);
    }
  };

  if (loading) return <div className="pt-24 px-6">Loading...</div>;
  if (!product) return <div className="pt-24 px-6">Product not found</div>;

  // Discount calculation
  const discount =
    product.mrp && product.price
      ? `${Math.round(((product.mrp - product.price) / product.mrp) * 100)}% off`
      : null;

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 pb-16 bg-[#f9f9f6] font-[Inter]">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-10">
        
    
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-[400px] object-contain rounded-xl border"
          />
        </div>

      
        <div className="flex-1 space-y-5 text-gray-800">
          <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded text-xs">
              {product.rating ? product.rating.toFixed(1) : '4.5'} <AiFillStar className="text-yellow-300" />
            </div>
            <span className="text-gray-500">
              {product.reviews ? `(${product.reviews} reviews)` : '(1,200 reviews)'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-lg font-semibold">
            <span className="text-[#0f766e] text-xl">₹{product.price}</span>
            {product.mrp && (
              <>
                <del className="text-gray-500 text-md">₹{product.mrp}</del>
                <span className="text-green-600 text-md">{discount}</span>
              </>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description || 'No description available.'}</p>

          
          <div className="bg-[#f2fdfa] border border-teal-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-teal-800">Seller Information</h3>
            <p><strong>Name:</strong> {product.sellerName || 'N/A'}</p>
            <p><strong>City:</strong> {product.city || 'N/A'}</p>
            <p><strong>Contact:</strong> {product.contact || 'N/A'}</p>
          </div>

          
          {role === 'buyer' && (
            <button
              onClick={handleAddToCart}
              className="mt-4 w-full sm:w-fit bg-[#0f766e] hover:bg-[#0e665c] text-white px-6 py-3 rounded-full font-medium transition"
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
