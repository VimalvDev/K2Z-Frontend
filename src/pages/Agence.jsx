import React from "react";
import HeadingSecA from "../components/agence/HeadingSecA";
import ParagraphSecA from "../components/agence/ParagraphSecA";
import FigureSecA from "../components/agence/FigureSecA";

function Agence() {
  return (
    <div>
      <div  className="a_section p-4 relative overflow-x-hidden pt-[55.6vh] ">
        <FigureSecA  />
        <HeadingSecA />
        <ParagraphSecA />
      </div>
      <div className="b_section h-screen ">

      </div>
    </div>
  );
}

export default Agence;
