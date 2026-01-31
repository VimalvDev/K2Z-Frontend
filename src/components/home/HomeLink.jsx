import React from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import Agence from "../../pages/Agence";
import Projects from "../../pages/Projects";

function HomeLink() {
  return (
    <ul className="flex items-center justify-center  " >
      <li className="mt-10 mx-2.5 mb-0  " >
        
        <Link className="text-white border-3 font-[Lausanne-500]  border-white text-[clamp(1rem,6.5vw,10rem)] uppercase rounded-full px-[0.3em] pt-[0.22em] pb-0 leading-[0.7] inline-block hover:text-lime-accent hover:border-lime-accent " to="/projects" element={<Projects />}>
          Projets
        </Link>
      </li>
      <li className="mt-10 mx-2.5 mb-0  " >
        <Link className="text-white border-3 font-[Lausanne-500]  border-white text-[clamp(1rem,6.5vw,10rem)] uppercase rounded-full px-[0.3em] pt-[0.22em] pb-0 leading-[0.7] inline-block hover:text-lime-accent hover:border-lime-accent " to="/agence" element={<Agence />}>
          Agence
        </Link>
      </li>
    </ul>
  );
}

export default HomeLink;
