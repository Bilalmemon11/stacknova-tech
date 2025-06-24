import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    emailjs
      .sendForm(
        "service_onecuaq",     // ✔️ EmailJS Service ID
        "template_th4t48g",    // ✔️ EmailJS Template ID
        form.current,
        "5oMRn2hZIkQn5hnkf"    // ✔️ Your Public Key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          form.current.reset();
        },
        (err) => {
          setError("Something went wrong. Try again later.");
          setLoading(false);
          console.error("EmailJS Error:", err);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-[#0D1B2A] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 bg-[#1B263B] border border-gray-600 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-[#1B263B] border border-gray-600 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              name="title"
              required
              className="w-full px-4 py-2 bg-[#1B263B] border border-gray-600 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 bg-[#1B263B] border border-gray-600 rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#00ADB5] hover:bg-[#008891] transition-all px-6 py-2 rounded text-white font-semibold ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {sent && <p className="text-green-400 mt-3">✅ Message sent successfully!</p>}
          {error && <p className="text-red-400 mt-3">❌ {error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
