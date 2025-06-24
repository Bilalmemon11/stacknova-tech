
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:5000/api/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleAddOrUpdate = async () => {
    try {
      const config = { headers: { Authorization: token } };

      if (editId) {
        await axios.put(`http://localhost:5000/api/blogs/${editId}`, { title, content }, config);
      } else {
        await axios.post("http://localhost:5000/api/blogs", { title, content }, config);
      }

      setTitle("");
      setContent("");
      setEditId(null);
      fetchBlogs();
    } catch (err) {
      alert("Failed to add or update blog. Make sure you're logged in.");
    }
  };

  const handleEdit = (blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setEditId(blog._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: { Authorization: token },
      });
      fetchBlogs();
    } catch (err) {
      alert("Failed to delete blog");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{editId ? "Edit Blog" : "Create New Blog"}</h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 mb-2 w-full"
      ></textarea>

      <button onClick={handleAddOrUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">
        {editId ? "Update Blog" : "Add Blog"}
      </button>

      <h2 className="text-2xl font-bold mt-8 mb-4">All Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog._id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-700">{blog.content}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminBlogs;



