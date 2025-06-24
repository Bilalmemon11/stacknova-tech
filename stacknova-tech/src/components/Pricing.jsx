// src/components/Pricing.jsx
import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$200",
    features: ["Single Page Website", "Responsive Design", "Basic SEO", "3 Revisions"],
  },
  {
    name: "Standard",
    price: "$500",
    features: ["Multi-Page Website",
       "Custom Design",
        "On-Page SEO", 
        "5 Revisions", 
        "Admin Panel"],
        
  },
  {
    name: "Premium",
    price: "$1000",
    features: ["Web + Mobile App", "Custom Dashboard", "Advanced SEO", "Unlimited Revisions", "Deployment"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-[#0D1B2A] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Pricing Plans</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-[#1B263B] rounded-lg shadow-lg p-6 border border-cyan-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gren-300">    <span className="text-cyan-400 mr-2">✓</span>
                  {feature}</li>
                ))}
              </ul>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
