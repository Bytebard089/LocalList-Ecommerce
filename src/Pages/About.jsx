import React from 'react';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <div className="min-h-screen pt-28 pb-16 px-6 bg-gradient-to-br from-[#edfdfa] via-[#fefefe] to-[#dff1f3] font-[Inter] text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold text-teal-800 mb-4">About VyapaarSetu</h1>
          <p className="text-gray-600 text-md md:text-lg max-w-3xl mx-auto">
            A student-built initiative connecting Bharat’s local businesses with the digital world.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-20">
          {[
            {
              icon: '🌱',
              title: 'Our Vision',
              desc: 'From local artisans to farmers, VyapaarSetu uplifts grassroots talent across India.',
            },
            {
              icon: '🤝',
              title: 'Community-First',
              desc: 'Every feature is designed keeping sellers and buyers in mind — simple, warm, and real.',
            },
            {
              icon: '🧵',
              title: 'What Makes Us Unique',
              desc: 'Unlike other platforms, we blend storytelling, simplicity, and seller ownership.',
            },
            {
              icon: '🚀',
              title: 'The Road Ahead',
              desc: 'We’re planning multi-language support, live inventory sync, and more smart dashboards.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-md border border-teal-200 shadow-xl rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-bold text-teal-700 mb-2">
                {item.icon} {item.title}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto my-20">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">Our Journey</h2>
          <div className="border-l-4 border-teal-500 pl-6 space-y-8">
            {[
              {
                year: 'Jan 2025',
                title: 'Project Ideation',
                detail: 'Inspired by ONDC, we imagined a platform rooted in Indian local commerce.',
              },
              {
                year: 'Mar 2025',
                title: 'Design & Prototyping',
                detail: 'Crafted UI inspired by Etsy + ONDC with our unique minimal theme.',
              },
              {
                year: 'May 2025',
                title: 'Development & Firebase Integration',
                detail: 'Login, Signup, Role-based Dashboard, Firestore – all built from scratch.',
              },
              {
                year: 'June 2025',
                title: 'Final Showcase & Enhancements',
                detail: 'Added product pages, review system, dashboard features & polish.',
              },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-sm text-gray-400">{item.year}</div>
                <h4 className="text-lg font-semibold text-teal-700">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="max-w-6xl mx-auto my-24 text-center px-4">
          <h2 className="text-3xl font-bold text-teal-800 mb-12">Our Impact in Bharat</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { count: '150+', label: 'Verified Sellers', icon: '🧑‍🌾' },
              { count: '500+', label: 'Products Listed', icon: '📦' },
              { count: '20+', label: 'States Covered', icon: '🗺️' },
              { count: '2500+', label: 'Successful Orders', icon: '✅' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/90 shadow-xl rounded-xl p-6 border border-teal-200 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-2xl font-bold text-teal-800">{item.count}</div>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
