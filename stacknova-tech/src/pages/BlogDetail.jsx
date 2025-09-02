import React from "react"; 
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

// ✅ Blog posts ka data
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
  {
    id: 3,
    title: "Top 7 SaaS Tools Every Startup Must Use in 2025",
    content: `
Running a startup in 2025 is more challenging than ever. From managing teams to keeping costs low, every founder needs the right SaaS tools to save time and scale faster. In this article, we’ll explore the 7 best SaaS tools every startup must use in 2025 to stay competitive.

1. Slack – Team Communication Made Easy
Slack is the go-to SaaS tool for instant communication. It reduces email clutter and helps teams collaborate in real-time.

2. Trello – Project Management for Startups
If you’re running a startup, you need to organize tasks. Trello is simple, visual, and perfect for tracking projects.

3. Notion – All-in-One Workspace
Notion allows startups to manage docs, tasks, wikis, and databases in one place. It’s highly flexible and customizable.

4. HubSpot – Marketing & CRM
For growing businesses, HubSpot is the best SaaS tool for managing customers, automating marketing, and boosting sales.

5. Zoom – Video Conferencing for Remote Teams
Meetings made simple. Zoom is essential for any startup working remotely or with international clients.

6. QuickBooks – Accounting & Finance SaaS
Startups can’t afford to mess up finances. QuickBooks is a powerful SaaS tool for invoicing, payroll, and tax management.

7. Canva – Design Made Simple
Not every startup can afford a designer. Canva helps you create stunning graphics, pitch decks, and social media posts easily.

🚀 Final Thoughts
Startups that use these SaaS tools save time, cut costs, and scale faster. If you’re running a business in 2025, investing in the right SaaS stack is no longer optional – it’s essential.
    `,
    date: "September 2, 2025",
    image: "/blog-saas.jpg",
  },
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
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{post.date}</p>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </main>
  );
};

export default BlogDetail;

