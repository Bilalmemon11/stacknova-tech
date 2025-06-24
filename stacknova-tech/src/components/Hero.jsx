import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ import Link

export default function Hero() {
  return (
    <section id="hero" className="text-center py-20 px-4 bg-[#0D1B2A] text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-cyan-400 mb-4"
      >
        StackNova Tech
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl max-w-2xl mx-auto mb-8"
      >
        Future-Ready Software Solutions – We build scalable web, mobile & cloud applications using Laravel, MERN & Flutter.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex justify-center gap-4 flex-wrap"
      >
        {/* Get a Free Quote Button */}
        <Link to="/quote">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-2xl text-lg">
            Get a Free Quote
          </button>
        </Link>

        {/* View Portfolio Button */}
        <Link to="/portfolio">
          <button className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-2xl text-lg">
            View Portfolio
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
