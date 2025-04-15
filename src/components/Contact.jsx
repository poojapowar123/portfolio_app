// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, message } = form;

//     if (!name || !email || !message) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     // You can replace this with API logic
//     console.log('Contact Form Submitted:', form);
//     alert('Message sent successfully!');
//     setForm({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="contact-container">
//       <h2 className="contact-title">Contact Us</h2>
//       <form onSubmit={handleSubmit} className="contact-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           className="contact-input"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//           className="contact-input"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={form.message}
//           onChange={handleChange}
//           className="contact-textarea"
//         />
//         <button type="submit" className="contact-button">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import 

// const Contact = () => {
//   return (
//     <div>
//       <Link to="/Message">Contact</Link>
//     </div>
//   )
// }

// export default Contact
