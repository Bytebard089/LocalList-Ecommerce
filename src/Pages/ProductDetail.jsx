import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: "Tribes India Handmade Blue Pottery Round Soap Dispenser (Yellow)",
    price: "₹499",
    description: "Elevate your bathroom or kitchen decor with our Handmade Blue Pottery Soap Dispenser, skillfully crafted by tribal artisans from the heart of Rajasthan. Each piece is a testament to the rich cultural heritage and artistic traditions of the region. Immerse yourself in the vibrant hues and intricate patterns of blue pottery, adding a touch of tradition and authenticity to your space. The dispenser is not just a functional item but a work of art, meticulously handmade to perfection",
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/6597dc5f5f130b32398c10c5/1sptutirj00194-rnd-yellow-4--800x800.png",
    seller: { name: "Rajesh Kumar", contact: "9876543210", city: "Jaipur" },
    reviews: [
      { user: "Anjali", comment: "Loved the quality!", rating: 5 },
      { user: "Ravi", comment: "Perfect for my plants.", rating: 4 },
      { user: "Sneha", comment: "Exactly what I wanted!", rating: 5 },
      { user: "Aman", comment: "Delivery was quick.", rating: 4 },
      { user: "Meera", comment: "Worth the price!", rating: 5 },
    ]
  },
  {
    id: 2,
    title: "Clothikoo Women's Crop Top (Black, Flower Print)",
    price: "₹299",
    description: "Introducing the Clothikoo Women’s Crop Top – the ultimate blend of comfort, style, and durability!.Crafted from 100% combed cotton, this top offers an exceptionally soft feel that outlasts regular cotton. For our Heather colors, we use an 85% cotton and 15% viscose blend, providing a lighter, breathable texture perfect for warmer days.",
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/g/adbf971a3f1e49d686ea8d552209571f/womens-crop-top-black-front-672ba172ddd16-800x800.jpeg",
    seller: { name: "Asha Organic Farms", contact: "9834567120", city: "Kerala" },
    reviews: [
      { user: "Priya", comment: "Super fresh!", rating: 5 },
      { user: "Amit", comment: "Amazing aroma.", rating: 4 },
      { user: "Komal", comment: "Great value.", rating: 4 },
      { user: "Neha", comment: "Very authentic.", rating: 5 },
      { user: "Deepak", comment: "Packed well.", rating: 4 },
    ]
  },
  {
    id: 3,
    title: "Men's Leather Blue Comfy Sneakers Casual Shoes",
    price: "₹1200",
    description: "Mens Leather Mules Slip ons in grain leather with leather lining and antiskid sole at the bottom.  Original leather is not water proof so don't wear in the water.  Walk and feel the comfort with only MACVEN- SINCE 1980",
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65ffe7265d034cca5af51762/img_20240208_143415_615-800x800.jpg",
    seller: { name: "Himalayan Threads", contact: "9823770012", city: "Shimla" },
    reviews: [
      { user: "Ruchi", comment: "So cozy and warm!", rating: 5 },
      { user: "Vikram", comment: "Gifting this to mom.", rating: 5 },
      { user: "Neelam", comment: "Traditional and elegant.", rating: 5 },
      { user: "Alok", comment: "Worthy buy.", rating: 4 },
      { user: "Divya", comment: "Soft material.", rating: 4 },
    ]
  },
  {
    id: 4,
    title: "Adhyavi long silver necklace with enamel pendant",
    price: "₹150",
    description: "The intricate chain gracefully embraces the neck, while a magnificent pendant steals the spotlight. The pendant features a captivating rising sun motif in vibrant enamel with silver ghunghroo adorning the ends, symbolizing hope, new beginnings",
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/655cc37e1659e544204b53a0/img_2289-800x800.jpg",
    seller: { name: "SweetGram Foods", contact: "9900123456", city: "Kolhapur" },
    reviews: [
      { user: "Kiran", comment: "Tastes like childhood!", rating: 5 },
      { user: "Ankit", comment: "My kids love these.", rating: 4 },
      { user: "Pooja", comment: "No chemicals, great!", rating: 5 },
      { user: "Manav", comment: "Affordable snack.", rating: 4 },
      { user: "Sana", comment: "Authentic jaggery!", rating: 5 },
    ]
  },
  {
    id: 5,
    title: "Apple iPhone 11-128 GB / WHITE",
    price: "₹650",
    description: "Specs for Nerds  General iOS 13, Upgradable to iOS 18.1 Thickness: 8.3 mm 194 g  Display 6.1 inch, Liquid Retina IPS LCD 828 x 1792 Pixels 326 ppi Scratch-resistant glass Notch Display  Camera 12 MP + 12 MP Dual Rear Camera 4K@24/30/60fps, 1080p@30/60/120/240fps",
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/g/b2c6af2a1f7049a1b4a40b2a96d8797b/4511335-1739360952725286097-ondc-manual-800x800.jpeg",
    seller: { name: "GreenWeave", contact: "8976543210", city: "Guwahati" },
    reviews: [
      { user: "Sonal", comment: "Super strong!", rating: 5 },
      { user: "Ramesh", comment: "Good size and looks.", rating: 4 },
      { user: "Rina", comment: "Great craftsmanship.", rating: 5 },
      { user: "Varun", comment: "Good finish.", rating: 4 },
      { user: "Isha", comment: "Eco-friendly!", rating: 5 },
    ]
  },
  {
    id: 6,
    title: "RP 85-A LABEL PRINTERS",
    price: "₹14499",
    description: "Experience the pinnacle of label printing efficiency with Rugtek’s high-speed label printer, an essential addition to any dynamic workspace. Boasting a generous print width of 72mm, this label printer accommodates various label sizes, ensuring versatility for your labeling needs.",
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/65cc415efc444fcd1bf9e93a/p-800x800.jpg",
    seller: { name: "Terracraft Studio", contact: "9865432109", city: "Bhubaneswar" },
    reviews: [
      { user: "Tanya", comment: "Looks so classy!", rating: 5 },
      { user: "Naveen", comment: "Beautiful texture.", rating: 4 },
      { user: "Kirti", comment: "Loved it!", rating: 5 },
      { user: "Sunil", comment: "Unique product.", rating: 4 },
      { user: "Aarti", comment: "Perfect décor.", rating: 5 },
    ]
  },
  {
    id: 7,
    title: "Cottage Paper Animal Mounted Painting (22 cm x 19 cm x 2 cm)",
    price: "₹249",
    description: "Animal Mounted Painting",
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/67580dd583fc4b8c41cd3b18/81cgrzdwbcl-800x800.jpg",
    seller: { name: "AyurvedaMart", contact: "9123456780", city: "Ayodhya" },
    reviews: [
      { user: "Preeti", comment: "Stops hair fall!", rating: 5 },
      { user: "Kunal", comment: "Feels so natural.", rating: 4 },
      { user: "Simran", comment: "Very useful.", rating: 5 },
      { user: "Arjun", comment: "Recommended!", rating: 4 },
      { user: "Mahi", comment: "Nice quality.", rating: 5 },
    ]
  },
  {
    id: 8,
    title: "Beardo Thug Life Perfume Combo",
    price: "₹499",
    description: "Includes: Beardo Whisky Smoke Perfume EDP (50ml), Beardo Mariner Perfume EDP (50ml),Mafia Perfume EDP (50ml),Whisky Smoke Bourbon Perfume EDP (50ml)",
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/6582c4c40effe1debcdc5325/thuglifeperfumecombo2160x2160-800x800.jpg",
    seller: { name: "Masala Roots", contact: "9990123412", city: "Jodhpur" },
    reviews: [
      { user: "Shalini", comment: "Flavour bomb!", rating: 5 },
      { user: "Imran", comment: "Very authentic.", rating: 5 },
      { user: "Ritu", comment: "Takes dishes to next level.", rating: 5 },
      { user: "Ajay", comment: "Packed well.", rating: 4 },
      { user: "Saba", comment: "Good aroma.", rating: 4 },
    ]
  }
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-20">Product not found</p>;

  return (
    <div className="min-h-screen bg-[#f9f9f6] pt-24 pb-16 px-6 font-[Poppins]">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-8 flex flex-col md:flex-row gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-[400px] h-auto object-cover rounded-xl"
        />
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-xl font-semibold text-teal-700">{product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          <div className="bg-teal-50 p-4 rounded-xl mt-6">
            <h3 className="font-semibold text-gray-700 mb-2">Seller Info</h3>
            <p className="text-gray-600"><strong>Name:</strong> {product.seller.name}</p>
            <p className="text-gray-600"><strong>City:</strong> {product.seller.city}</p>
            <p className="text-gray-600"><strong>Contact:</strong> {product.seller.contact}</p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="mt-6 inline-block bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg transition"
          >
            ← Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 bg-white p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h3>
        <div className="space-y-6">
          {product.reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 border-b pb-5 hover:bg-gray-50 transition p-4 rounded-lg"
            >
              {/* Avatar */}
              <img
                src={`https://randomuser.me/api/portraits/${review.user.length % 2 === 0 ? 'women' : 'men'}/${20 + idx}.jpg`}
                alt={review.user}
                className="w-12 h-12 rounded-full border-2 border-teal-500 shadow"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-gray-800">{review.user}</p>
                  <span className="text-sm text-gray-500">{review.date || "June 2025"}</span>
                </div>

                {/* Star rating with bar */}
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex text-yellow-400 text-sm">
                    {Array.from({ length: review.rating }, (_, i) => <span key={i}>★</span>)}
                    {Array.from({ length: 5 - review.rating }, (_, i) => <span key={i} className="text-gray-300">★</span>)}
                  </div>
                  <span className="ml-2 text-sm text-teal-700 font-medium">Verified Buyer</span>
                </div>

                {/* Review comment */}
                <p className="text-gray-600 mt-2">{review.comment}</p>
                {review.photo && (
                  <img
                    src={review.photo}
                    alt="Uploaded"
                    className="mt-3 w-32 h-20 object-cover rounded-md shadow-sm border"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
