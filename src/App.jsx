import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Stats from "./Components/Stats/Stats";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Tagline from "./Components/Tagline/Tagline";

function App() {
  return (
    <div className="app-grid">
      <div className="hero-container">
        <Header className="app-header" />
        <HeroSection className="app-hero" />
      </div>
      <Stats className="app-stats" />
      <HowItWorks className="app-how-it-works" />
      <Tagline className="app-tagline" />
      <Footer className="app-footer" />
    </div>
  );
}

export default App;
