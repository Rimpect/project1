import React from "react";


import "./HowItWorks.css";
export default function HowItWorks() {
  return (
    <div>
      <div className="howItWorks">HOW IT WORKS?</div>
      <div className="container">
        {/* Верхняя линия с 3 картинками */}
        <div className="image-line">
          <img src="/src/img/elements/FirstPolygon.png" alt="Многоугольник1" />
          <img src="/src/img/elements/TwoPolygon.png" alt="Многоугольник2" />
          <img src="/src/img/elements/ThreePolygon.png" alt="Многоугольник3" />
        </div>

        {/* Нижняя линия с 3 текстами */}
        <div className="texts">
          <p className="text-left">
            Became a miner or Join<br></br> our mining pool to get<br></br> a
            $KeyCN tokens
          </p>
          <p className="text-center">
            Trade your tokens on <br></br>the listed exchanges<br></br> at any
            time
          </p>
          <p className="text-right">
            Keep growing<br></br> decentralized future<br></br> together with
            KeyCoin
          </p>
        </div>
      </div>
    </div>
  );
}
