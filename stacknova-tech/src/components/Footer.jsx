import React from "react";
import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white py-10 px-4 text-center border-t border-cyan-800">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">StackNova Tech</h3>
        <p className="text-sm text-white-400 mb-4">
          We deliver modern full stack software solutions for businesses worldwide.
        </p>

        <div className="flex justify-center gap-4 text-sm text-cyan-300 mb-6">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/blog" className="hover:underline">Blog</a>
        </div>

        {/* 🔗 Social Media Icons */}
        <div className="flex justify-center gap-4 text-cyan-400 text-2xl mb-6">
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

        <p className="text-xs text-gray-200">
          © {new Date().getFullYear()} StackNova Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
