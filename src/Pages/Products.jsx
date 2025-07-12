import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';


const hardcodedProducts = [
  {
    id: 1,
    title: "Tribes India Handmade Blue Pottery Round Soap Dispenser",
    price: "₹499",
    rating: 4,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/6597dc5f5f130b32398c10c5/1sptutirj00194-rnd-yellow-4--800x800.png",
  },
  {
    id: 2,
    title: "Clothikoo Women's Crop Top (Black, Flower Print)",
    price: "₹299",
    rating: 3,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/g/adbf971a3f1e49d686ea8d552209571f/womens-crop-top-black-front-672ba172ddd16-800x800.jpeg",
  },
  {
    id: 3,
    title: "Men's Leather Blue Comfy Sneakers Casual Shoes",
    price: "₹1200",
    rating: 4,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65ffe7265d034cca5af51762/img_20240208_143415_615-800x800.jpg",
    
  },
  {
    id: 4,
    title: "Adhyavi long silver necklace with enamel pendant",
    price: "₹150",
    rating: 5,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/655cc37e1659e544204b53a0/img_2289-800x800.jpg",
  },
  {
    id: 5,
    title: "Apple iPhone 11-128 GB / WHITE",
    price: "₹89",
    rating: 3,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/g/b2c6af2a1f7049a1b4a40b2a96d8797b/4511335-1739360952725286097-ondc-manual-800x800.jpeg",
  },
  {
    id: 6,
    title: "RP 85-A LABEL PRINTERS",
    price: "₹399",
    rating: 4,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65cc415efc444fcd1bf9e93a/p-800x800.jpg",
  },
  {
    id: 7,
    title: "Animal Mounted Painting",
    price: "₹999",
    rating: 5,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/67580dd583fc4b8c41cd3b18/81cgrzdwbcl-800x800.jpg",
  
  },
  {
    id: 8,
    title: "Beardo Thug Life Perfume",
    price: "₹799",
    rating: 3,
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/6582c4c40effe1debcdc5325/thuglifeperfumecombo2160x2160-800x800.jpg",
  },
];

const renderStars = (rating) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
      ))}
    </>
  );
};

function Products() {
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

  const allProducts = [...firestoreProducts, ...hardcodedProducts];

  return (
    <div className="min-h-screen bg-[#f9f9f6] pt-24 pb-16 px-6 text-gray-900 font-[Poppins]">
      <h1 className="text-4xl font-extrabold text-center text-teal-900 mb-12">Featured Products</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allProducts.map((product, index) => (
          <Link to={`/product/${product.id}`} key={index}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 overflow-hidden group">
              <img src={product.image} alt={product.title} className="w-full h-56 object-cover" />
              <div className="p-4 space-y-1">
                <h2 className="text-base font-semibold text-gray-800 group-hover:text-teal-600">
                  {product.title}
                </h2>
                <div className="text-sm">{renderStars(product.rating || 4)}</div>
                <div className="text-teal-700 font-bold text-lg">{product.price}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;