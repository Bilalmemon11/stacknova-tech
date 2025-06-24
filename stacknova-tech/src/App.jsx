import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import ProjectDetail from "./pages/1ProjectDetail";
import Quote from "./pages/Quote";
import PortfolioPage from "./pages/PortfolioPage";
import Blog from "./pages/Blog";

// Admin
// import AdminLogin from "./components/AdminLogin";
// import AdminDashboard from "./components/AdminDashboard";
// import AdminPrivateRoute from "./components/AdminPrivateRoute";
// import AdminBlogs from "./components/AdminBlogs"; // ✅ Already imported

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/admin/login" element={<AdminLogin />} /> */}

        {/* ✅ Protected Routes */}
        {/* <Route
          path="/admin/dashboard"
          element={
            <AdminPrivateRoute>
              <AdminDashboard />
            </AdminPrivateRoute>
          }
        />

        <Route
          path="/admin/blogs"
          element={
            <AdminPrivateRoute>
              <AdminBlogs />
            </AdminPrivateRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
