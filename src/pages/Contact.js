import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Show modal for phone/WhatsApp options
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  // Phone/WhatsApp details
  const phoneNumber = '+923174893006';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // Netlify form submit
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('/', {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => alert('Form submission failed: ' + error));
  };

  const handlePhoneClick = (e) => {
    e.preventDefault();
    setShowPhoneOptions(true);
  };

  const handlePhoneOption = (option) => {
    setShowPhoneOptions(false);
    if (option === 'phone') {
      window.location.href = `tel:${phoneNumber}`;
    } else if (option === 'whatsapp') {
      window.open(whatsappLink, '_blank');
    }
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
        {/* Phone/WhatsApp Modal Link */}
        <button
          onClick={handlePhoneClick}
          className="flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold transition outline-none"
          style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
          aria-label="Contact phone or WhatsApp"
        >
          <FaPhone /> {phoneNumber}
        </button>
        <a
          href="https://www.linkedin.com/in/muhammad-usman-778016210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/Meharshani"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-gray-900 font-semibold transition"
        >
          <FaGithub /> GitHub
        </a>
      </section>

      {/* Phone or WhatsApp Modal */}
      {showPhoneOptions && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 min-w-[250px] max-w-xs"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Contact via</h2>
            <button
              onClick={() => handlePhoneOption('phone')}
              className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold"
            >
              Phone Call
            </button>
            <button
              onClick={() => handlePhoneOption('whatsapp')}
              className="w-full px-4 py-2 bg-[#25D366] text-white rounded hover:bg-[#1ebc59] transition font-semibold flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 32 32" width="20" height="20" className="inline-block"><path fill="white" d="M16 3C9.373 3 4 8.373 4 15c0 2.252.614 4.408 1.777 6.305L4 29l8.002-2.063A12.921 12.921 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.975c-2.016 0-4.016-.536-5.735-1.557L7 25l1.639-3.343A9.994 9.994 0 1 1 26 15c0 5.514-4.486 10-10 10zm5.356-7.068c-.257-.129-1.54-.76-1.779-.847-.239-.09-.412-.129-.585.128-.17.257-.668.847-.819 1.02-.15.172-.302.193-.56.064-.258-.129-1.09-.401-2.075-1.277-.767-.669-1.285-1.495-1.435-1.753-.15-.257-.016-.397.112-.524.116-.115.258-.298.386-.447.128-.15.171-.257.257-.428.085-.172.043-.323-.021-.45-.064-.128-.585-1.413-.802-1.934-.211-.506-.426-.438-.585-.447l-.5-.008a.969.969 0 0 0-.7.326c-.24.258-.914.892-.914 2.169 0 1.277.936 2.511 1.066 2.687.129.172 1.84 2.812 4.463 3.832.625.214 1.112.342 1.492.438.627.16 1.2.138 1.65.084.503-.06 1.54-.628 1.757-1.235.216-.607.216-1.128.151-1.236-.064-.107-.235-.171-.492-.3z"></path></svg>
              WhatsApp
            </button>
            <button
              onClick={handleCloseModal}
              className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Contact Form with Netlify */}
      <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        {submitted && (
          <p className="text-green-600 font-semibold mb-4 text-center">Message sent successfully!</p>
        )}
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit} 
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
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;