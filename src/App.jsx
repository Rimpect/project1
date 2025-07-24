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
 
      <section id="about" className="hero-container">
        <Header />
        
        <HeroSection/>
      </section>

      <section id="presale" className="app-stats">
        <Stats />
      </section>

      <section id="roadmap" className="app-how-it-works">
        <HowItWorks />
      </section>

      <section className="app-tagline">
        <Tagline />
      </section>

      <Footer />
    </div>
  );
}

export default App;