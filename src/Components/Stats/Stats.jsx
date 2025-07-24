import React from "react";
import "./Stats.css";

export default function Stats() {
  return (
    <div className="container-stats">
      <div className="text-container-stats">
        <div className="text-word">Total Supply:</div>
        <div className="text-value">20,369,349,000,000</div>
        <div className="text-word">$KeyCN Price:</div>
        <div className="text-value">$4.20</div>
      </div>
      <div className="diogram">
        <img src="/src/img/elements/Diogram.png" alt="Диаграмма" />
      </div>
      <div className="action-button">
        <button className="stats-button">
          <img src="/src/img/elements/OrangeButton.png" alt="Кнопка" />
          <span className="button-text-stats">BUY HERE</span>
        </button>
      </div>
    </div>
  );
}
