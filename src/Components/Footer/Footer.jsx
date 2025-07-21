import React from "react";
import "./Footer.css";
import BlackLogo from "../../img/icons/BlackLogo.png";
import TelegrammIcon from "../../img/icons/TelegrammIcon.png";
import XIcon from "../../img/icons/XIcon.png";
import Logo1Icon from "../../img/icons/Logo1Icon.png";
import Logo2Icon from "../../img/icons/Logo2Icon.png";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="BlackLogo">
        <img src={BlackLogo} alt="Иконка" />
      </div>
      <div className="group-icons">
        <img src={TelegrammIcon} alt="Иконка" />
        <img src={XIcon} alt="Иконка" />
        <img src={Logo1Icon} alt="Иконка" />
        <img src={Logo2Icon} alt="Иконка" />
      </div>
      <div>
        <nav className="footer-nav">
          <a href="/about">About</a>
          <a href="/tokenomics">Tokenomics</a>
          <a href="/presale">Presale</a>
          <a href="/dao">DAO</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/up">Up</a>
        </nav>
      </div>
    </div>
  );
}
