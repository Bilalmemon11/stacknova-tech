import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";

import FAQs from "../components/FAQs";
import Testimonials from "../components/Testimonials";




export default function HomePage() {
  return (
    <main className="bg-[#0D1B2A] text-white font-sans">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Services />
         <Pricing />
        <Portfolio />
        <FAQs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
