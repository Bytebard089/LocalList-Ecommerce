import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { AiFillStar } from 'react-icons/ai';
import Footer from '../components/Footer';

const producti = [
  {
    id: 'hc1',
    title: "Soap Dispenser",
    price: 499,
    mrp: 699,
    rating: 4.5,
    reviews: 412,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/6597dc5f5f130b32398c10c5/1sptutirj00194-rnd-yellow-4--800x800.png",
  },
  {
    id: 'hc2',
    title: "Clothikoo Women's Crop Top (Black, Flower Print)",
    price: 299,
    mrp: 499,
    rating: 4.2,
    reviews: 322,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/g/adbf971a3f1e49d686ea8d552209571f/womens-crop-top-black-front-672ba172ddd16-800x800.jpeg",
  },
  {
    id: 'hc3',
    title: "Men's Leather Blue Comfy Sneakers Casual Shoes",
    price: 1200,
    mrp: 1499,
    rating: 4.6,
    reviews: 287,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65ffe7265d034cca5af51762/img_20240208_143415_615-800x800.jpg",
  },
  {
    id: 'hc4',
    title: "Adhyavi long silver necklace with enamel pendant",
    price: 150,
    mrp: 300,
    rating: 4.0,
    reviews: 140,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/655cc37e1659e544204b53a0/img_2289-800x800.jpg",
  },
];

const Products = () => {
  const [firestoreProducts, setFirestoreProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const fetched = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFirestoreProducts(fetched);
    };

    fetchProducts();
  }, []);

  const allProducts = [...firestoreProducts, ...producti];

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f6] font-[Inter] overflow-x-hidden">
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-teal-800 tracking-tight">
          ✨ Featured Products
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((product, index) => {
            const discount =
              product.mrp && product.price
                ? `${Math.round(((product.mrp - product.price) / product.mrp) * 100)}% off`
                : null;

            return (
              <Link to={`/product/${product.id}`} key={index}>
                <div className="bg-white rounded-xl border border-gray-100 shadow hover:shadow-md hover:border-gray-300 transition duration-300 p-4 group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 sm:h-48 object-contain mb-3"
                  />

                  <div className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {product.title}
                  </div>

                  <div className="text-xs text-gray-500 mt-1">White, Cable Included</div>

                  <div className="flex items-center text-xs font-semibold space-x-1 mt-2">
                    <span className="bg-green-600 text-white px-2 py-[2px] rounded flex items-center gap-1">
                      {(product.rating || 4).toFixed(1)} <AiFillStar className="text-yellow-300 text-xs" />
                    </span>
                    <span className="text-gray-500">({product.reviews || '1,200'})</span>
                  </div>

                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-[#0f766e] font-bold text-md">₹{product.price}</span>
                    {product.mrp && (
                      <>
                        <del className="text-gray-500 text-sm">₹{product.mrp}</del>
                        <span className="text-green-600 font-medium text-sm">{discount}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
