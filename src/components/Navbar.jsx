import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav_bar'>
          <div className='left nav_items'>
            <img src="/portfolio.jpg" alt="Portfolio" />
          </div>
          <div className='right'>
            <Link to="/" className="nav_items">Home</Link>
            <Link to="/about" className="nav_items">About Me</Link>
            <Link to="/experience" className="nav_items">Experience</Link>
            <Link to="/skills" className="nav_items">Skills</Link>
            <Link to="/contact" className="nav_items">Contact</Link>
            <Link to="/let's talk" className="nav_items">Let's talk</Link>
          </div>
        </div>
      );
}

export default Navbar
