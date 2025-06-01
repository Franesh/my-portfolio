import React, { useState } from 'react';

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
    <section id="contact" style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <h2>Contact Me</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        
        {/* Contact Info */}
        <div style={{ flex: '1 1 250px', minWidth: '250px' }}>
          <p><strong>Phone:</strong> 9789045440</p>
          <p><strong>Email:</strong> franesh2005@gmail.com</p>
        </div>

        {/* Query Form */}
        <form onSubmit={handleSubmit} style={{ flex: '1 1 300px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ padding: '0.5rem' }}
          />
          <button type="submit" style={{ padding: '0.7rem', cursor: 'pointer' }}>Send Message</button>
        </form>

        {/* Simple Map iframe */}
        <div style={{ flex: '1 1 300px', minWidth: '300px', height: '300px' }}>
          <iframe
            title="Chennai Location"
            src="https://maps.google.com/maps?q=13.089967,80.176336&z=15&output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}

export default Contact;
