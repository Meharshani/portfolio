import React from 'react';
import { Link } from 'react-router-dom';
import { profilepic } from '../images/image';

function Home() {
  return (
    <main className="home-page">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-yellow-400">Muhammad Usman</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          Web & Mobile Developer | AI-Integrated Apps
        </p>
        <p className="mt-4 text-gray-100 max-w-2xl">
          I craft scalable, fast, and secure web & mobile applications using React.js, React Native, Electron.js, Tailwind CSS, and AI-powered solutions.
        </p>
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <Link
            to="/projects"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-200 transition"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-white rounded hover:bg-white hover:text-blue-600 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="md:flex md:items-center md:gap-10">

        <img 
          src={profilepic} 
          alt="Muhammad Usman" 
          className="rounded-lg w-40 h-56 md:w-56 md:h-72 object-cover mx-auto md:mx-0 shadow-lg border-2 border-blue-500"
        />

          <div className="mt-6 md:mt-0 text-center md:text-left max-w-2xl">
            <h2 className="text-3xl font-bold">About Me</h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              I'm <strong>Muhammad Usman</strong>, a passionate Web & Mobile Developer with
              <strong> 4+ years of experience</strong> building scalable, high-performance
              applications for web, mobile, and desktop platforms.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              I specialize in developing <strong>AI-powered solutions</strong>, modern web platforms,
              and cross-platform mobile applications. My technical expertise includes
              <strong> React.js, Next.js, React Native, Node.js, Electron.js, MongoDB, and TypeScript</strong>.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              I also work with <strong>AI integrations, cloud services, secure payment systems,
                and real-time data dashboards</strong>, focusing on delivering clean, scalable,
              and innovative digital products that help businesses grow.
            </p>

          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
          {[
            { name: 'React.js', level: 95 },
            { name: 'React Native', level: 95 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'Electron.js', level: 90 },
            { name: 'MongoDB', level: 85 },
            { name: 'JavaScript', level: 95 },
            { name: 'Node.js', level: 85 },
            { name: 'TypeScript', level: 90 },
            { name: 'Next.js', level: 82 },
            { name: 'Redux', level: 90 },
            { name: 'Firebase', level: 85 },
            { name: 'Git & GitHub', level: 95 },
            // Added AI & API-related skills/services
            { name: 'OpenAI (ChatGPT)', level: 90 },
            { name: 'Anthropic (Claude AI)', level: 85 },
            { name: 'Google Cloud AI', level: 80 },
            { name: 'LangChain', level: 80 },
            { name: 'Replicate API', level: 78 },
            { name: 'Hugging Face API', level: 80 },
            { name: 'Twilio & SendGrid', level: 82 },
            { name: 'Stripe Payments', level: 87 },
            { name: 'Supabase', level: 80 },
            { name: 'Vercel & Netlify', level: 89 },
            { name: 'REST & GraphQL APIs', level: 90 },
          ].map(skill => (
            <div key={skill.name}>
              <p className="font-semibold">{skill.name}</p>
              <div className="w-full bg-gray-200 rounded h-3 mt-2">
                <div
                  className="bg-blue-600 h-3 rounded transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="mt-1 text-sm text-gray-500">{skill.level}%</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-gray-600 text-md max-w-2xl mx-auto">
          <span className="block font-semibold text-blue-700 mb-2">AI | LLM Integrations & Modern API Services</span>
          <p>
            Experienced in integrating ChatGPT (OpenAI), Claude AI (Anthropic), Hugging Face models, custom AI endpoints, and required modern APIs.<br />
            Frequently work with LangChain, payment, SMS, email APIs, and cloud deployment platforms to deliver fully modern, AI-powered apps.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {/* Project Card Example */}
          <div className="bg-white rounded shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-bold">Hilalfolio App</h3>
            <p className="mt-2 text-gray-700">
              AI-integrated crypto analyst platform with secure payments, real-time data, and dynamic visualizations.
              <span className="block mt-1 text-green-700 font-semibold">
                Unique Feature: Islamic perspective token analysis — instantly check if a crypto is considered halal or haram.
              </span>
            </p>
          </div>

          <div className="bg-white rounded shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-bold">Reviewer Dashboard</h3>
            <p className="mt-2 text-gray-700">
              Secure admin panel for content management, advanced text editor, and comprehensive reporting system.
            </p>
          </div>

          <div className="bg-white rounded shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-bold">E-commerce Apps (ShopPro, clone (shein))</h3>
            <p className="mt-2 text-gray-700">
              Wallet management, push notifications, real-time search, and user profile management features.
            </p>
          </div>

          <div className="bg-white rounded shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-bold">Invoice App</h3>
            <p className="mt-2 text-gray-700">
              Online management platform for creating, sending, and tracking invoices efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold">Let's Build Something Amazing!</h2>
        <p className="mt-4">Want to collaborate? Reach out to me today.</p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-blue-600 font-semibold rounded hover:bg-yellow-300 transition"
        >
          Contact Me
        </Link>
      </section>

    </main>
  );
}

export default Home;