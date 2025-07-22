import React from "react";
import "./Stats.css";

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
          <img src="/src/img/elements/OrangeButton.png" alt="Кнопка" />
          <span className="button-text-stats">BUY HERE</span>
        </button>
      </div>
    </div>
  );
}
