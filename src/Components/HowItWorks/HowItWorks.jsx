import React from "react";
import image1 from "../../img/icons/111.png";
import image2 from "../../img/icons/222.png";
import image3 from "../../img/icons/333.png";

import "./HowItWorks.css";
export default function HowItWorks() {
  return (
    <div>
      <div className="howItWorks">HOW IT WORKS?</div>
      <div className="container">
        {/* Верхняя линия с 3 картинками */}
        <div className="image-line">
          <img src={image1} alt="Image 1" className="image-left" />
          <img src={image2} alt="Image 2" className="image-center" />
          <img src={image3} alt="Image 3" className="image-right" />
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
