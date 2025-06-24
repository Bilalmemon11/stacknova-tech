import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in Laravel, MERN Stack (MongoDB, Express, React, Node), Flutter, and cloud solutions.",
  },
  {
    question: "Do you provide maintenance after project completion?",
    answer: "Yes, we offer post-launch maintenance and support services as per your needs.",
  },
  {
    question: "How do I get a quote for my project?",
    answer: "Just fill out our 'Get a Free Quote' form, and we’ll reach out with a personalized estimate.",
  },
  {
    question: "Can you help migrate an existing project?",
    answer: "Absolutely! We can help refactor, upgrade, or migrate your app to modern stacks.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#0D1B2A] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-700 py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium">{faq.question}</h4>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="text-gray-300 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
