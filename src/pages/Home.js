import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="page home-page">
      <section className="hero">
        <h1 className="hero-title">Hi, I'm <span className="accent">Your Name</span></h1>
        <p className="hero-tagline">Designer & Developer</p>
        <p className="hero-desc">
          I craft thoughtful digital experiences and clean, maintainable code.
        </p>
        <Link to="/about" className="btn btn-primary">Learn more</Link>
      </section>
    </main>
  );
}

export default Home;
