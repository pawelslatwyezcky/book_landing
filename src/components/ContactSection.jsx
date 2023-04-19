import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setShow(true);
    const templateId = 'template_rylf9da';
    emailjs
      .sendForm(
        'service_gvdn1pc',
        templateId,
        '#contact_form',
        'VpX55BAAOaEs84cPF'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Get in Touch</h2>
      <p className="contact-description">
        If you have any questions or feedback about "Adventures in the Magical
        World", feel free to reach out to us. We'd love to hear from you!
      </p>
      <div className="form-container">
        <form id="contact_form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send
          </button>
          <p
            className="success_message"
            style={{ transform: show ? 'scale(1)' : 'scale(0)' }}
          >
            Thank you for your message! ✅
          </p>
        </form>
        <div className="form_img">
          <img src="./assets/contact_img.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
