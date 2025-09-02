
import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import blogPosts from "../data/blogData.json"; // same import here

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <p className="text-center text-red-400">Blog not found!</p>;
  }

  return (
    <main className="bg-[#0D1B2A] text-white min-h-screen px-4 py-10 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-cyan-400 hover:underline block mb-6">
          ← Back to Blog
        </Link>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{post.date}</p>
        <p className="text-gray-300 leading-relaxed">{post.content}</p>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </main>
  );
};

export default BlogDetail;
