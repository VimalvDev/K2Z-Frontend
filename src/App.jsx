import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
// import { ReactLenis } from "lenis/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";




// gsap.registerPlugin(ScrollTrigger)

function App() {
//   const lenisRef = useRef();



//   useEffect(() => {
//     function update(time) {
//       lenisRef.current?.lenis?.raf(time);
//     }
//     lenisRef.current?.lenis.on("scroll", ScrollTrigger.update)
//     gsap.ticker.add(update);
//     gsap.ticker.lagSmoothing(0);

//     return () => {
//       gsap.ticker.remove(update);
//     };
//   }, []);

  return (
    <>
      <div className="loader"></div>

      <div className="data_container">
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
