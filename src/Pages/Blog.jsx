import React, { useState } from 'react';
import Footer from '../components/Footer';

const blogPosts = [
  {
    title: "5 Reasons to Support Local Businesses in 2025",
    date: "June 5, 2025",
    excerpt: "Local businesses are the soul of our communities. Discover why buying local truly matters this year.",
    fullContent:
      "Local businesses shape the economy and preserve culture. Choosing local means supporting real people and their dreams. From job creation to eco-consciousness, supporting small sellers makes a big difference.",
  },
  {
    title: "From Clay to Customers: Kavita’s Journey",
    date: "May 28, 2025",
    excerpt: "Meet Kavita, a potter from Rajasthan, who turned handmade pots into a national favorite.",
    fullContent:
      "Starting with 3 designs and a passion for clay, Kavita used VyapaarSetu’s simple dashboard and vernacular onboarding to reach 14 states and employ 2 local artisans.",
  },
  {
    title: "Bringing Farmers Online: A Rural Revolution",
    date: "May 20, 2025",
    excerpt: "Explore how rural farmers are now selling directly to consumers with digital help.",
    fullContent:
      "Thanks to platforms like VyapaarSetu, farmers from remote regions now display their produce online. This transformation boosts incomes and spreads awareness about organic food and ethical farming.",
  },
  {
    title: "VyapaarSetu vs ONDC: The Difference",
    date: "May 10, 2025",
    excerpt: "ONDC builds a network. VyapaarSetu builds trust. Here's how we stand out.",
    fullContent:
      "VyapaarSetu prioritizes storytelling, aesthetics, and emotional connection. We offer design-rich product cards, guided onboarding, and seller-first experiences that ONDC doesn’t focus on.",
  },
];

function Blog() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 bg-gradient-to-br from-[#ecfdf5] via-[#f8fafc] to-[#e0f2fe] text-gray-800 font-[Inter]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center text-teal-800 mb-6">
            Our Stories & Insights
          </h1>
          <p className="text-center text-gray-600 text-md md:text-lg mb-12 max-w-2xl mx-auto">
            Real journeys, bold ideas, and voices from across Bharat, brought together by VyapaarSetu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="relative bg-white/80 backdrop-blur-xl border border-teal-100 shadow-lg hover:shadow-xl rounded-2xl p-6 transition duration-300"
              >
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-teal-200 rounded-full blur-2xl opacity-30 pointer-events-none"></div>

                <p className="text-sm text-teal-600 mb-2 font-semibold">{post.date}</p>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-wide">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>

                {expandedIndex === index && (
                  <p className="text-sm text-gray-800 mb-4 transition-all duration-300 ease-in-out">
                    {post.fullContent}
                  </p>
                )}

                <button
                  onClick={() => toggleExpand(index)}
                  className="text-sm text-teal-700 hover:text-teal-900 font-medium underline transition duration-150"
                >
                  {expandedIndex === index ? "Show Less" : "Read More"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
