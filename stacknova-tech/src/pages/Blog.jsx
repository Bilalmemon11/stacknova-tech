import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import blogPosts from "../data/blogData.json"; // yaha import kiya

const BlogPage = () => {
  return (
    <main className="bg-[#0D1B2A] text-white min-h-screen px-4 py-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="text-cyan-400 hover:underline block mb-6">
          ← Back to Home
        </Link>
        <h2 className="text-3xl font-bold mb-10 text-center">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-[#1B263B] rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-400 mb-1">{post.date}</p>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{post.summary}</p>
                <Link to={`/blog/${post.id}`} className="text-cyan-400 hover:underline text-sm">
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </main>
  );
};

export default BlogPage;

