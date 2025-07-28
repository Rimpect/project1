import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<LandingPage />} />
      <Route path="/tokenomics" element={<LandingPage />} />
      <Route path="/dao" element={<LandingPage />} />
      <Route path="/social" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
