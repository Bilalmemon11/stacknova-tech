import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

// dummy posts ka data (baad me API ya CMS se bhi laa sakte ho)
const blogPosts = [
  {
    id: 1,
    title: "Why You Should Choose Custom Software Solutions",
    content: `Custom software is built for your business needs. It increases efficiency, reduces costs, and grows with your company...`,
    date: "June 15, 2025",
    image: "/blog1.jpg",
  },
  {
    id: 2,
    title: "Top 5 Reasons to Use MERN Stack for Your Next Project",
    content: `The MERN stack combines MongoDB, Express, React, and Node.js. It's fast, scalable, and perfect for modern web apps...`,
    date: "June 10, 2025",
    image: "/blog2.jpg",
  },
  // aur bhi posts yaha add kar do
];

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
