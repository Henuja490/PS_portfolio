import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css"; // Add a custom CSS file for additional styling

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="content text-center">
        <h1 className="display-4 fw-bold solid-text">Welcome to My Academic Portfolio</h1>
        <p className="lead animate-slide-up">📚 Explore PS Assignments & Works</p>
      </div>
    </div>
  );
};

export default Hero;
