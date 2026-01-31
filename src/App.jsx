import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";

function App() {
  return (
    <>
      <div className="loader"></div>

      <div className="data_container" >
        <div className="header"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/agence" element={<Agence />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
