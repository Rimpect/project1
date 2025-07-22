import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="BlackLogo">
        <img src="/src/img/icons/BlackLogo.png" alt="Логотип" />
      </div>
      <div className="group-icons">
        <img src="/src/img/icons/TelegrammIcon.png" alt="Telegram Icon" />
        <img src="/src/img/icons/XIcon.png" alt="X Icon" />
        <img src="/src/img/icons/Logo1Icon.png" alt="Logo 1 Icon" />
        <img src="/src/img/icons/Logo2Icon.png" alt="Logo 2 Icon" />
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
