import React, { useRef } from "react";
import HeadingSecA from "../components/agence/section_a/HeadingSecA";
import ParagraphSecA from "../components/agence/section_a/ParagraphSecA";
import BottomText from "../components/agence/section_a/BottomText";
import FigureSecA from "../components/agence/section_a/FigureSecA";
function Agence() {
  return (
    <div>
      <div className="a_section px-4 relative overflow-x-hidden pb-[11em]   bg-white ">
        <div className="a_section_top pt-[55.6vh] pb-[6em] ">
          <FigureSecA />
          <HeadingSecA />
          <ParagraphSecA />
        </div>
        <div className="a_section_bottom">
          <BottomText />
        </div>
      </div>
    </div>
  );
}

export default Agence;
