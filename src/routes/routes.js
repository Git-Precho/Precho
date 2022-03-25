import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../home/Home';
import QrCrossWord from '../qr-cross-word/QrCrossWord'
import DevelopStage from '../components/develop-stage/developStage'

export default function MyRoutes() {
  return (
    <Router>
      <Routes>
          <Route path="/mothers-day" element={<QrCrossWord />} />
          <Route path="/" element={<Home />} />
          <Route path="/develop" element={<DevelopStage />} />
      </Routes>
    </Router>
  );
}
