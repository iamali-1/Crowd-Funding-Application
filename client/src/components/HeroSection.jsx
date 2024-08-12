import React from "react";


import hero from "../assets/hero.svg";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-info-wrapper">
        <div className="hero-info-text">
          <h1>
          An Emerging Technique of <span className="highlighted">Investment</span> for Harnessing the Power of <span className="highlighted">Decentralized Autonomous Organization</span> 
            
          </h1>
          <br />
          <p className="hero-info-description">
          DAOs represent a revolutionary form of organizational structure, leveraging blockchain technology and smart contracts to create entities that operate without a central authority.
          </p>
          <p>The allure of this emerging investment technique lies in its ability to enhance transparency, security, and efficiency while minimizing traditional bureaucratic constraints.</p>
          
        </div>
      </div>
      <div className="hero-image-container" >
        <img className="hero-img" src={hero} alt="blockchain" />
      </div>
    </div>
  );
};

export default HeroSection;
