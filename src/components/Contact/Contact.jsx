import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div>
       <div className="container contact" id="contact">
      <h2>Contact Me</h2>
      <p>If you have any questions, feel free to reach out via this form!</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
  )
}

export default Contact
