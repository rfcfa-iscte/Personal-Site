import React from "react";
import logoImage from "../assets/foto2rui.png"; // Replace 'your-logo-image.png' with the actual path to your logo image

const Navbar = () => {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    const target = document.querySelector(id);
    target.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home" onClick={event => scrollToSection(event, '#home')}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={event => scrollToSection(event, '#about')}>About</a>
        </li>
        <li>
          <a href="#services" onClick={event => scrollToSection(event, '#services')}>Services</a>
        </li>
        <li>
          <a href="#portfolio" onClick={event => scrollToSection(event, '#portfolio')}>Portfolio</a>
        </li>
        <li>
          <a href="#contact" onClick={event => scrollToSection(event, '#contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
