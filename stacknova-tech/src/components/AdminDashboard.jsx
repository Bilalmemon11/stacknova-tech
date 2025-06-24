import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome Admin 👋</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#1B263B] p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Manage Blogs</h2>
          <p className="mb-4 text-gray-300">Add, edit, or delete blog posts.</p>
          <button
            onClick={() => navigate("/admin/blogs")}
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded"
          >
            Go
          </button>
        </div>

        {/* Future cards here (Users, Stats, etc.) */}
      </div>
    </div>
  );
};

export default AdminDashboard;

