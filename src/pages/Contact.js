import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  const phoneNumber = '+923174893006';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 

  const handlePhoneClick = (e) => {
    e.preventDefault();
    setShowPhoneOptions(true);
  };

  const handlePhoneOption = (option) => {
    setShowPhoneOptions(false);
    if (option === 'phone') window.location.href = `tel:${phoneNumber}`;
    else if (option === 'whatsapp') window.open(whatsappLink, '_blank');
  };

  const handleCloseModal = () => setShowPhoneOptions(false);

  return (
    <main className="contact-page min-h-screen bg-gray-50 flex flex-col items-center px-6 md:px-20 py-20">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact Me</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Let's collaborate! Reach out for projects, partnerships, or just to say hi.
        </p>
      </section>

      {/* Contact Info */}
      <section className="flex flex-col md:flex-row justify-center gap-8 mb-16 text-gray-800">
        <a href="mailto:meharshani741@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition">
          <FaEnvelope /> meharshani741@gmail.com
        </a>
        <button
          onClick={handlePhoneClick}
          className="flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold transition outline-none"
          style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
        >
          <FaPhone /> {phoneNumber}
        </button>
        <a href="https://www.linkedin.com/in/muhammad-usman-778016210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold transition">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/Meharshani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-gray-900 font-semibold transition">
          <FaGithub /> GitHub
        </a>
      </section>

      {/* Phone or WhatsApp Modal */}
      {showPhoneOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" onClick={handleCloseModal}>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 min-w-[250px] max-w-xs" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Contact via</h2>
            <button onClick={() => handlePhoneOption('phone')} className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold">
              Phone Call
            </button>
            <button onClick={() => handlePhoneOption('whatsapp')} className="w-full px-4 py-2 bg-[#25D366] text-white rounded hover:bg-[#1ebc59] transition font-semibold flex items-center justify-center gap-2">
              WhatsApp
            </button>
            <button onClick={handleCloseModal} className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition font-semibold">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Contact Form with Netlify */}
      <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        {submitted && <p className="text-green-600 font-semibold mb-4 text-center">Message sent successfully!</p>}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col gap-4"
         >
          {/* hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="mt-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-500 transition">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;