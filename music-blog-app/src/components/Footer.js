// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      &copy; 2024 Moi Albert. All rights reserved.
      </div>
      <div className="footer-right">
        <a href="https://www.facebook.com/albert.moifula.3" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/invites/contact/?i=io24dd1h2a7m&utm_content=4rdswxo" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://rw.linkedin.com/in/moi-albert-81bb46168" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com/moi_albert71?s=09" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
