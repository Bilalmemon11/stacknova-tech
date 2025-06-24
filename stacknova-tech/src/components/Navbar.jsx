import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Pricing from './Pricing';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0D1B2A] text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          <img src="/logo.png" alt="StackNova Logo" className="h-10 w-auto" />

        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#hero" className="hover:text-[#00ADB5]">Home</a>
          <a href="#services" className="hover:text-[#00ADB5]">Services</a>
          <a href="#pricing" className="hover:text-[#00ADB5]">Pricing</a>
          <a href="#portfolio" className="hover:text-[#00ADB5]">Portfolio</a>
          <a href="#contact" className="hover:text-[#00ADB5]">Contact</a>
          <Link to="/about" className="hover:text-[#00ADB5]">About</Link>
          <Link to="/blog" className="hover:text-[#00ADB5]">Blog</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#1B263B]">
          <Link to="/" className="block hover:text-[#00ADB5]" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block hover:text-[#00ADB5]" onClick={toggleMenu}>About</Link>
          <Link to="/pricing" className="block hover:text-[#00ADB5]" onClick={toggleMenu}>Pricing</Link>
          <a href="#services" className="block hover:text-[#00ADB5]" onClick={toggleMenu}>Services</a>
          <a href="#portfolio" className="block hover:text-[#00ADB5]" onClick={toggleMenu}>Work</a>
          <a href="#contact" className="block hover:text-[#00ADB5]" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
