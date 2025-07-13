import React from 'react';

const sellers = [
  {
    name: "Milind Bansal",
    city: "Punjab",
    story: "The team helped me set up everything. Grateful!",
    avatar: "blob:https://web.whatsapp.com/5d5ae0cb-41d5-465f-a6e1-fba5d78e62e4",
  },
  {
    name: "Shreya Suman",
    city: "Bihar",
    story: "The platform is easy to use. Orders managed from phone!",
    avatar: "https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/70dfa73a0dba47ada2d24965f70cc7a4.jpeg",
  },
  {
    name: "Harshita Joshi",
    city: "Gujarat",
    story: "My products now reach across India. Business tripled in 6 months.",
    avatar: "https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/a8f87d67940a4d3a8ccc1329e365ec78.jpeg",
  },
  {
    name: "Soumya Tiwari",
    city: "Delhi",
    story: "Finally, a platform that values local artisans like us.",
    avatar: "https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/ce04246f51014864aebfec77a840f4d7.jpeg",
  },
  
];

const products = [
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
  {
    id: 4,
    title: "Adhyavi long silver necklace with enamel pendant",
    price: "₹150",
    image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/655cc37e1659e544204b53a0/img_2289-800x800.jpg",
  },
];

function Home() {
  return (
    <div className="min-h-screen font-[Poppins] text-gray-800 bg-[#f9f9f6]">

      {/* Hero */}
      <section className="relative flex flex-col md:flex-row items-center max-w-7xl mx-auto pt-24 px-6 pb-16 gap-10">
        <div className="z-10 flex-1 max-w-lg space-y-8">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
            Welcome to <span className="text-[#0f766e]">VyapaarSetu</span>
          </h1>
          <p className="text-lg text-gray-600">
            Empowering local sellers, connecting conscious buyers. Made in Bharat.
          </p>
          <button className="bg-[#0f766e] text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-[#0e5f5a] transition">
            Start Exploring
          </button>
        </div>

        <div className="z-10 flex-1">
          <img
            src="https://www.salesforce.com/au/blog/wp-content/uploads/sites/4/2024/01/ecommerce-trends.jpg?w=889"
            alt="Ecommerce"
            className="rounded-xl shadow-xl object-cover max-h-[400px] mx-auto"
          />
        </div>
      </section>

      {/* Why VyapaarSetu */}
      <section className="max-w-7xl mx-auto px-6 my-20">
        <div className="grid md:grid-cols-2 gap-16 items-center bg-white p-10 rounded-3xl shadow-md">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#0f766e]">Objectives of VyapaarSetu</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="text-xl font-semibold">Enhancing Competition</h4>
                <p>The goal is to break the monopoly of big digital platforms, which means you’ll have more options to choose from</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Embracing Digital Transformation</h4>
                <p>This means helping businesses make a smooth transition to digital technologies, making your online experience better.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Ensuring Fairness and Access</h4>
                <p>The objective is to ensure even small businesses and local shops have a fair shot online, giving you more choices.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Improving Delivery</h4>
                <p>By making deliveries more efficient, you’ll get your orders faster and with fewer hassles.</p>
              </div>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/support-local-business-concept_23-2148599970.jpg?semt=ais_hybrid&w=740"
            alt="India Map"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 my-24">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-[#ffffff] border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.title}</h3>
                <p className="mt-1 text-[#0f766e] font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Movement */}
      <section className="bg-gradient-to-r from-[#e0f7f4] to-[#f5fefd] py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-[#0f766e] mb-12">Join the Movement</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-semibold text-xl mb-2">No Middlemen</h3>
              <p>Direct seller-to-buyer platform with transparency.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🏪</div>
              <h3 className="font-semibold text-xl mb-2">Your Own Store</h3>
              <p>Create your storefront in minutes — zero setup hassle.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="font-semibold text-xl mb-2">Get Started Fast</h3>
              <p>Easy onboarding, responsive support, instant visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Stories */}
      <section className="bg-[#fefefe] py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Seller Stories</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {sellers.map((seller, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow hover:shadow-md transition"
            >
              <img
                src={seller.avatar}
                alt={seller.name}
                className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-[#0f766e]"
              />
              <h4 className="font-semibold text-lg text-gray-900">{seller.name}</h4>
              <p className="text-sm text-gray-500 mb-2">{seller.city}</p>
              <p>{seller.story}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e6f0ed] text-[#0f766e] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-lg font-bold">VyapaarSetu</h3>
            <p className="text-sm text-gray-600">Made in Bharat, for Bharat.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-[#0f766e]">Help Center</a></li>
                <li><a href="#" className="hover:text-[#0f766e]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-[#0f766e]">Privacy</a></li>
                <li><a href="#" className="hover:text-[#0f766e]">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-[#0f766e]">Instagram</a></li>
                <li><a href="#" className="hover:text-[#0f766e]">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
