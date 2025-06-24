import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Quote() {
    const form = useRef();
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_onecuaq",       // Your EmailJS service ID
                "template_th4t48g",      // Your EmailJS template ID
                form.current,
                "5oMRn2hZIkQn5hnkf"      // Your public key
            )
            .then(
                () => {
                    setSent(true);
                    form.current.reset();
                },
                (error) => {
                    console.error("Email sending failed:", error);
                }
            );
    };

    return (
        <main className="bg-[#0D1B2A] text-white min-h-screen py-16 px-4 font-sans">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="text-cyan-400 hover:text-cyan-300 mb-4 inline-block">
                    ← Back to Home
                </Link>

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-4 text-center"
                >
                    Get a Free Quote
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg text-center text-gray-300 mb-10"
                >
                    Fill out the form below and we'll get back to you with a custom quote tailored to your project.
                </motion.p>

                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-6 bg-[#1B263B] p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div>
                        <label className="block text-sm mb-1">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-2 bg-[#0D1B2A] border border-gray-600 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 bg-[#0D1B2A] border border-gray-600 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Project Requirements</label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            className="w-full px-4 py-2 bg-[#0D1B2A] border border-gray-600 rounded"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded"
                    >
                        Submit Request
                    </button>

                    {sent && (
                        <p className="text-green-400 mt-3 text-sm">
                            ✅ Your request has been submitted successfully!
                        </p>
                    )}
                </motion.form>
            </div>
            <Footer />

        </main>
    );
}

