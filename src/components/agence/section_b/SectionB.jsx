import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

function SectionB() {
  const containerImgRef = useRef(null);

  useGSAP(()=>{
    const sections = document.querySelectorAll(".sticky_img_sections")

    sections.forEach((section)=>{
        ScrollTrigger.create({
            trigger: section,
            start: "bottom bottom",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            markers:true
        })
    })

  },{scope:containerImgRef})

  return (
    <div ref={containerImgRef} className=" pt-[13em] bg-black " >
      <section className="sticky_img_sections">
        <div className="img h-screen w-full rounded-[5em] ">
          <img className="object-contain w-full h-full  " src="/Imgs/imgi_19_ChantalG_640X960.jpg" alt="" />
        </div>
    
      </section>

      <section className="sticky_img_sections">
        <div className="img h-screen w-full ">
          <img className="object-contain w-full h-full " src="/Imgs/imgi_20_SebR_640X960.jpg" alt="" />
        </div>

      </section>

      <section className="sticky_img_sections bg-black w-full min-h-screen" ><h2>5000</h2></section>

    </div>
  );
}

export default SectionB;
