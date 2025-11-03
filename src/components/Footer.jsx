import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Links */}
      <div className="footer-links">
        <NavLink to="/" className="footer-link">Home</NavLink>
        <NavLink to="/about" className="footer-link">About</NavLink>
        <NavLink to="/projects" className="footer-link">Projects</NavLink>
        <NavLink to="/skills" className="footer-link">Skills</NavLink>
        <NavLink to="/contact" className="footer-link">Contact</NavLink>
      </div>

      {/* Social Icons */}
      <div className="footer-socials">
        <a href="https://github.com/ImahWisdom" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/imah-wisdom-869349330" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/wizzy0115?s=21" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://wa.me/2348183547260" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      {/* Copyright */}
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Wisdom. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
