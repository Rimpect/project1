import React from "react";
import "./Stats.css";
import buttonImage from "../../img/icons/ButtonOrange.png";
export default function Stats() {
  return (
    <div>
      <div className="container-stats">
        <div className="text-container-stats">
          <div className="text-word">Total supply:</div>
          <div className="text-value">20,369,349,000,000</div>
          <div className="text-word">$KeyCN price:</div>
          <div className="text-value">$4.20</div>
        </div>
        <div>Здесь должен быть график</div>
      </div>
      <div className="action-button">
        {" "}
        <button className="hero-button">
          <img
            src={buttonImage}
            alt="Button background"
            className="button-bg"
          />
        </button>
      </div>
    </div>
  );
}
