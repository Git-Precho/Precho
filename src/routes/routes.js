import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../home/Home';
import QrCrossWord from '../qr-cross-word/QrCrossWord'

export default function MyRoutes() {
  return (
    <Router>
      <Routes>
          <Route path="/mothers-day" element={<QrCrossWord />} />

          <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}
