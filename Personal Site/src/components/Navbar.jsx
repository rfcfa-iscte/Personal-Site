import React from 'react';

// import logoImage from './your-logo-image.png'; // Replace 'your-logo-image.png' with the actual path to your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* <img src={logoImage} alt="Logo" className="logo" /> */}
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
