import React from "react";
import "./HeroSection.css";
import buttonImage from "../../img/icons/ButtonWhite2.png";
export default function HeroSection() {
  return (
    <div className="container">
      <div className="heading-text">
        FIRST EVER MINABLE<br></br> MEMECOIN
      </div>
      <div className="text-container">
        <div className="text-part">
          $KeyCN breaks the meme coin<br></br> mold by empowering miners to
          <br></br> secure its token supply, combining<br></br> fun with
          functionality.
        </div>
        <div className="text-part">
          Unlike other meme coins, $KeyCN<br></br> integrates miners into its
          ecosystem,<br></br>
          ensuring stability and long-term value.<br></br> It’s not just a
          meme—it’s a movement<br></br> in the crypto world.
        </div>
      </div>
      <div>
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
