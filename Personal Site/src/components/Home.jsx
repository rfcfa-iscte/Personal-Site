import React from "react";
import logoImage from "../assets/foto2rui.png"; // Replace 'your-logo-image.png' with the actual path to your logo image

// About Me Component
const Home = () => {
  return (
    <section id="home">
      <div className="about-container">
        <img src={logoImage} alt="Logo" className="aboutImage" />

        <div className="about-text">
          <div className="about-introduction">
            Hello! I'm Rui Ferreira, a business management and computer science
            graduate
          </div>
          <div className="about-based">based in Portugal.</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
