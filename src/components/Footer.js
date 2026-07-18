import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import logo from '../images/logo-dk-final.png';

const Footer = () => (
  <footer className="site-footer">
    <div><img className="footer-logo" src={logo} alt="DK" /><span>Designing. Developing. Evolving.</span></div>
    <p>© {new Date().getFullYear()} Diana Kaloyancheva</p>
    <nav aria-label="Social links">
      <a href="https://github.com/Diana-NK" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
      <a href="https://www.linkedin.com/in/diana-kaloyancheva-898832127/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
      <a href="mailto:diana.kaloyancheva@gmail.com" aria-label="Email"><FiMail /></a>
    </nav>
  </footer>
);

export default Footer;
