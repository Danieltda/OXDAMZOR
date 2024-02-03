// Footer.js
import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { SiBlockchaindotcom } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <SiBlockchaindotcom />
      </div>
      <div className="title">
        <p> OXDAMZOR</p>
      </div>
      <div className="social-icons">
        <a href="https://twitter.com/0xgramz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
        <a href="https://discord.gg/VucgpBpQ" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
