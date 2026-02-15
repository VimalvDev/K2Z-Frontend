import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useReducer, useRef } from "react";


import Footer from "./Footer";
gsap.registerPlugin(ScrollTrigger);

function SectionC() {
  const containerRef = useRef(null);

  const stickyContainerData = [
    {
      img: "/Imgs/imgi_33_thumbnailimage_opto.jpg",
      span: "Opto-Réseau",
      h2: "On vous voit comme personne",
    },
    {
      img: "/Imgs/imgi_34_chalaxeur-thumbnail_img.jpg",
      span: "Lamajeure",
      h2: "Lamajeure",
    },
    {
      img: "/Imgs/imgi_35_Fruite_thumbnail_bbq.jpg",
      span: "Lassonde",
      h2: "Fruité",
    },
  ];

  useGSAP(
    () => {
      const sections = document.querySelectorAll(".sticky_sections");

      sections.forEach((section, index) => {
        const container = section.querySelector(".container");

        gsap.to(container, {
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            scrub: true,
          },
        });

        // if (index === sections.length - 1) return;

        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      {/* <div className="top w-full h-full text-center  relative inset-0 ">
        <a className=" uppercase text-[1.3rem] " href="#">
          Voir tous les projets
        </a>
      </div> */}

      {stickyContainerData.map((sections, index) => {
        return (
          <section
            key={index}
            className="sticky_sections relative group min-h-screen rounded-t-[2em] overflow-hidden "
          >
            <img
              src={sections.img}
              className="object-cover object-top w-full h-full inset-0 group-hover:scale-105 absolute transition-transform duration-500 "
              alt=""
            />
            <div className="black_overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 "></div>

            <div className="container relative z-10 text-white min-w-full  min-h-screen p-3">
              <div className="bottom flex justify-center items-center h-full w-full flex-col mt-[18em]">
                <span className="text-[2em]">{sections.span}</span>
                <h2 className="text-[5vw] group-hover:underline font-[Lausanne-500]">
                  {sections.h2}
                </h2>
              </div>
            </div>
          </section>
        );
      })}

  <Footer />
    </div>
  );
}

export default SectionC;
