import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-section-container">
      <div className="heading-text">
        FIRST EVER MINABLE
        <br /> MEMECOIN
      </div>

      <div className="text-container">
        <div className="text-part">
          <div className="icon-container">
            <img
              src="/src/img/elements/VectorOrangeBackground.png"
              alt="Icon"
            />
          </div>
          $KeyCN breaks the meme coin
          <br /> mold by empowering miners to
          <br /> secure its token supply, combining
          <br /> fun with functionality.
        </div>

        <div className="text-part">
          <div className="icon-container">
            <img
              src="/src/img/elements/VectorOrangeBackground.png"
              alt="Icon"
            />
          </div>
          Unlike other meme coins, $KeyCN
          <br /> integrates miners into its ecosystem,
          <br />
          ensuring stability and long-term value.
          <br /> It's not just a meme—it's a movement
          <br /> in the crypto world.
        </div>
      </div>

      <button className="hero-button">
        <img
          src="/src/img/elements/WhiteButton.png"
          alt="Кнопка"
          className="button-bg"
        />
        <span className="button-text">Mine here</span>
      </button>
    </div>
  );
}