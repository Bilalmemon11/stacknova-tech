import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    name: "John Smith",
    review:
      "Outstanding service! StackNova Tech delivered my project on time with top-notch quality.",
    // image: "/",
  },
  {
    name: "Sarah Ahmed",
    review:
      "Working with Bilal was a great experience. He’s professional and very skilled in Laravel.",
    // image: "/",
  },
  {
    name: "David Lee",
    review:
      "Highly recommend StackNova Tech for web apps. Smooth process and great communication.",
    // image: "/",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#1B263B] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

        <Carousel
          showArrows
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          className="max-w-2xl mx-auto"
        >
          {testimonials.map((t, index) => (
            <div key={index} className="px-4 py-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#0D1B2A] p-6 rounded-lg shadow-lg"
              >
                <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
                <p className="text-lg text-gray-300 mb-4">{t.review}</p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border border-cyan-400"
                  />
                  <span className="font-semibold text-cyan-400">{t.name}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
