import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import StatePage from "./components/StatePage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/state" element={<StatePage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
