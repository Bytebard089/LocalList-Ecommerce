import React from 'react';
import Footer from '../components/Footer';

const sellers = [
  {
    name: "Milind Bansal",
    city: "Punjab",
    story: "The team helped me set up everything. Grateful!",
   avatar: "https://media.istockphoto.com/id/1435566677/vector/placeholder-icon-illustration.jpg?s=612x612&w=0&k=20&c=mMfFWN3fGUOv5S75bC5tmMSzFDNoqiCQFfVoMTsC4n0="
  },
  {
    name: "Shreya Suman",
    city: "Bihar",
    story: "The platform is easy to use. Orders managed from phone!",
   avatar: "https://media.istockphoto.com/id/1435566677/vector/placeholder-icon-illustration.jpg?s=612x612&w=0&k=20&c=mMfFWN3fGUOv5S75bC5tmMSzFDNoqiCQFfVoMTsC4n0="
  },
  
  {
    name: "Harshita Joshi",
    city: "Gujarat",
    story: "My products now reach across India. Business tripled in 6 months.",
   avatar: "https://media.istockphoto.com/id/1435566677/vector/placeholder-icon-illustration.jpg?s=612x612&w=0&k=20&c=mMfFWN3fGUOv5S75bC5tmMSzFDNoqiCQFfVoMTsC4n0="
  },
  {
    name: "Soumya Tiwari",
    city: "Delhi",
    story: "Finally, a platform that values local artisans like us.",
    avatar: "https://media.istockphoto.com/id/1435566677/vector/placeholder-icon-illustration.jpg?s=612x612&w=0&k=20&c=mMfFWN3fGUOv5S75bC5tmMSzFDNoqiCQFfVoMTsC4n0="
  },
];

const products = [
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

function Home() {
  return (
    <div className="min-h-screen font-body text-gray-800 bg-[#f9f9f6] overflow-x-hidden">

      {/* Hero */}
      <section className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto pt-20 md:pt-28 px-6 pb-20 gap-10">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0f766e1a] via-[#e6f9f7] to-transparent z-0 rounded-bl-[5rem]"></div>
        <div className="z-10 flex-1 max-w-lg space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 font-heading">
            Welcome to <span className="text-[#0f766e]">VyapaarSetu</span>
          </h1>
          <p className="text-md sm:text-lg text-gray-600">
            Empowering local sellers, connecting conscious buyers. Made in Bharat.
          </p>
          <button className="bg-[#0f766e] text-white px-6 py-3 rounded-full text-base font-medium shadow-md hover:scale-105 transition">
            Start Exploring
          </button>
        </div>
        <div className="z-10 flex-1">
          <img
            src="https://www.salesforce.com/au/blog/wp-content/uploads/sites/4/2024/01/ecommerce-trends.jpg?w=889"
            alt="Ecommerce"
            className="rounded-3xl shadow-xl object-cover max-h-[400px] w-full"
          />
        </div>
      </section>

      {/* Objectives */}
      <section className="max-w-7xl mx-auto px-6 my-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center bg-white p-6 md:p-10 rounded-[2rem] shadow-xl">
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0f766e]">Objectives of VyapaarSetu</h2>
            <div className="space-y-6 text-gray-700">
              {[
                { title: "Enhancing Competition", desc: "Breaking monopoly of big platforms. More choices for you." },
                { title: "Embracing Digital Transformation", desc: "Helping sellers go digital. Better experiences for all." },
                { title: "Ensuring Fairness and Access", desc: "Even small shops get a fair shot online." },
                { title: "Improving Delivery", desc: "Faster deliveries. Fewer hassles." },
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/support-local-business-concept_23-2148599970.jpg"
            alt="Support local"
            className="rounded-xl shadow-md w-full"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 my-24">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-teal-800 tracking-tight">✨ Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => {
            const discount = product.mrp
              ? `${Math.round(((product.mrp - product.price) / product.mrp) * 100)}% off`
              : null;

            return (
              <div
                key={product.id}
                className="bg-white border border-gray-100 rounded-xl shadow hover:shadow-md hover:border-gray-300 transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 sm:h-48 object-contain p-4 rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{product.title}</h3>

                  <div className="mt-2 flex items-center text-xs font-semibold space-x-1">
                    <span className="bg-green-600 text-white px-2 py-[2px] rounded flex items-center gap-1">
                      {product.rating.toFixed(1)}
                      <svg className="w-3 h-3 fill-yellow-300" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.561-.954L10 0l2.95 5.956 6.561.954-4.755 4.635 1.122 6.545z" />
                      </svg>
                    </span>
                    <span className="text-gray-500">({product.reviews})</span>
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
              </div>
            );
          })}
        </div>
      </section>

      {/* Join the Movement */}
      <section className="bg-gradient-to-r from-[#e0f7f4] to-[#f5fefd] py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0f766e] mb-12">Join the Movement</h2>
          <div className="grid md:grid-cols-3 gap-10 text-gray-700">
            {[
              { icon: "🤝", title: "No Middlemen", desc: "Direct seller-to-buyer platform with transparency." },
              { icon: "🏪", title: "Your Own Store", desc: "Create your storefront in minutes." },
              { icon: "🚀", title: "Get Started Fast", desc: "Easy onboarding & instant visibility." },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Stories */}
      <section className="bg-[#fefefe] py-20 px-6">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-12 text-gray-800">🌟 Seller Stories</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {sellers.map((seller, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow hover:shadow-md transition hover:scale-105"
            >
              <img
                src={seller.avatar}
                alt={seller.name}
                className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-[#0f766e]"
              />
              <h4 className="font-semibold text-lg text-gray-900">{seller.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{seller.city}</p>
              <p className="text-sm">{seller.story}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
