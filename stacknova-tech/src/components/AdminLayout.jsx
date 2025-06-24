// src/components/AdminLayout.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#1B263B] text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">StackNova Admin</h2>
        <nav className="space-y-2">
          <Link to="/admin/dashboard" className="block hover:text-cyan-400">Dashboard</Link>
          <Link to="/admin/blogs" className="block hover:text-cyan-400">Manage Blogs</Link>
          <Link to="/admin/users" className="block hover:text-cyan-400">Manage Users</Link>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-[#0D1B2A] text-white">{children}</div>
    </div>
  );
};

export default AdminLayout;
