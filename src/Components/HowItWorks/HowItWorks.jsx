import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <h1 className="howItWorks">HOW IT WORKS?</h1>

      <div className="steps-container">
        <div className="step">
          <div className="image-wrapper">
            <img
              src="/src/img/elements/FirstPolygon.png"
              alt="Step 1"
              className="step-image"
            />
            <p className="image-text">1</p>
          </div>
          <p className="step-text">
            Become a miner or Join our mining pool
            <br />
            to get $KeyCN tokens
          </p>
        </div>
        <div className="step">
          <div className="image-wrapper">
            <img
              src="/src/img/elements/TwoPolygon.png"
              alt="Step 2"
              className="step-image"
            />
            <p className="image-text">2</p>
          </div>
          <p className="step-text">
            Trade your tokens on
            <br />
            the listed exchanges
            <br />
            at any time
          </p>
        </div>
        <div className="step">
          <div className="image-wrapper">
            <img
              src="/src/img/elements/ThreePolygon.png"
              alt="Step 3"
              className="step-image"
            />{" "}
            <p className="image-text">3</p>
          </div>
          <p className="step-text">
            Keep growing
            <br />
            decentralized future
            <br />
            together with KeyCoin
          </p>
        </div>
      </div>
    </div>
  );
}
