import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section section">
      <h2 className="section-header">Contact Me</h2>
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <p><strong>Phone:</strong> 9789045440</p>
          <p><strong>Email:</strong> franesh2005@gmail.com</p>
        </div>

        {/* Query Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          />
          <button type="submit">Send Message</button>
        </form>

        {/* Map */}
        <div className="map-container">
          <iframe
            title="Chennai Location"
            src="https://maps.google.com/maps?q=13.089967,80.176336&z=15&output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
