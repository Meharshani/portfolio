import React from 'react';

function Contact() {
  return (
    <main className="page contact-page">
      <section className="content-section">
        <h1 className="page-title">Contact</h1>
        <p className="lead">
          Let's work together. Drop me a line.
        </p>
        <div className="contact-body">
          <a href="mailto:hello@example.com" className="contact-link">hello@example.com</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
