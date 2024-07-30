import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
