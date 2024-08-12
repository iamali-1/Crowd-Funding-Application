import React from "react";
import invest from "../assets/invest.png";
const FeatureOne = () => {
  
  return (
    <div className="dev-section-container" id="invest">
    <h1 className="dev-section-title">
      Navigate your future with DAO <span className="highlighted">Investment</span>
    </h1>
    <div className="dev-section-wrapper">
      <div className="dev-section-text">
        
        <p className="dev-section-description">
        Explore the future of investment with our comprehensive guide to Decentralized Autonomous Organizations (DAOs).Discover the potential for high returns, transparent decision-making processes, and the revolutionary impact of blockchain technology on organizational structures. Whether you're a seasoned investor or new to the crypto space, our website provides valuable insights, expert analyses, and resources to help you make informed decisions. Join us on the forefront of the decentralized revolution and unlock a new era of investment possibilities with DAO.
        </p>
        
      </div>
      <div className="dev-section-image">
        <img src={invest} alt="invest tools" />
      </div>
    </div>
  </div>
         
  );
};

export default FeatureOne;
