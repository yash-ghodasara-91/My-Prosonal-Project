import React from "react";
import "./Commancss.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We'd love to hear from you! Fill out the form below and we'll get back to you soon.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
