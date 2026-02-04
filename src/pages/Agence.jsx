import React from "react";
import HeadingSecA from "../components/agence/HeadingSecA";
import ParagraphSecA from "../components/agence/ParagraphSecA";

function Agence() {
  return (
    <div>
      <div className="sticky_container "></div>
      <div className="a_section p-4 overflow-hidden pt-[55.6vh] ">
        <HeadingSecA />
        <ParagraphSecA />
      </div>
    </div>
  );
}

export default Agence;
