import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Social Icons
import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";

export default function About() {
  return (
    <main className="bg-[#0D1B2A] text-white font-sans min-h-screen">
      <div className="max-w-5xl mx-auto py-20 px-4">
        <Link
          to="/"
          className="text-cyan-400 hover:text-cyan-300 transition mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-center">About StackNova Tech</h1>

        <p className="text-lg mb-10 text-gray-300 text-center">
          StackNova Tech is a cutting-edge software development company providing scalable web, mobile, and cloud-based solutions tailored for businesses worldwide. Our team specializes in Laravel, MERN stack, Flutter, and more.
        </p>

        {/* 👤 CEO Section */}
        <motion.div
          className="bg-[#1B263B] rounded-lg p-6 shadow-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/ceo.jpg"
              alt="CEO - Bilal Memon"
              className="w-32 h-32 object-cover rounded-full border-4 border-cyan-400"
            />
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-2">Bilal Memon</h2>
              <p className="text-sm text-gray-400 mb-2">Founder & CEO, StackNova Tech</p>
              <p className="text-gray-300 mb-4">
                As a full stack developer with a passion for building modern digital products, Bilal leads the company with vision and hands-on expertise. With a proven record in Laravel, MERN, Flutter and scalable APIs, he ensures every project meets the highest standards.
              </p>

              {/* 🔗 Social Media Icons */}
              <div className="flex gap-4 text-cyan-400 text-2xl">
                <a href="https://www.linkedin.com/in/bilal-memon-695a00259" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.fiverr.com/hafizbilalra422?public_mode=true" target="_blank" rel="noopener noreferrer">
                  <SiFiverr />
                </a>
                <a href="https://www.upwork.com/freelancers/~013feed3ff12ceebb8?viewMode=1" target="_blank" rel="noopener noreferrer">
                  <SiUpwork />
                </a>
                <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
