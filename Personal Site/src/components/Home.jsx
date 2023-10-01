import React from "react";
import logoImage from "../assets/foto2rui.png"; // Replace 'your-logo-image.png' with the actual path to your logo image

// About Me Component
const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <div className="home-text-container">
          <p className="home-text1">Hello, I'm</p>
          <p className="home-text2">Rui</p>
          <p className="home-text2">Ferreira</p>
          <p className="home-text3">Full-Stack Developer</p>
          <button className="home-button1">Contact Me</button>
        </div>
        {/* <img src={logoImage} alt="Logo" className="aboutImage" /> */}
      </div>
    </section>
  );
};

export default Home;
