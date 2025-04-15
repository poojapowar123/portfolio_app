import React, { useState } from 'react';
import './Message.css'; // Import the CSS

const Message = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (name && message) {
      console.log(`From: ${name}\nMessage: ${message}`);
      setMessage('');
    } else {
      alert('Please enter both name and message.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Send a Message</h2>
      
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />
      
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-textarea"
      />
      
      <button onClick={handleSend} className="form-button">
        Send
      </button>
    </div>
  );
};

export default Message;
