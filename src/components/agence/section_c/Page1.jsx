import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useReducer, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Page1() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const sections = document.querySelectorAll("section");

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

        // if(index === sections.length - 1) return

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

      <section className="relative group min-h-screen rounded-[2em] overflow-hidden ">
        <img src="/Imgs/imgi_33_thumbnailimage_opto.jpg"
                  className="object-cover object-top w-full h-full inset-0 group-hover:scale-105 absolute transition-transform duration-500 "

        alt="" 
        
        />
        <div className="black_overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 "></div>

        <div className="container relative z-10 text-white min-w-full  min-h-screen p-3">
          <div className="bottom flex justify-center items-center h-full w-full flex-col mt-[18em]">
            <span className="text-[2em]">Opto-Réseau</span>
            <h2 className="text-[5vw] group-hover:underline font-[Lausanne-500]">
              On vous voit comme personne
            </h2>
          </div>
        </div>
      </section>

      <section className="relative group min-h-screen rounded-[2em] overflow-hidden ">
        <img
          className="object-cover object-top w-full h-full inset-0 group-hover:scale-105 absolute transition-transform duration-500 "
          src="/Imgs/imgi_34_chalaxeur-thumbnail_img.jpg"
          alt=""
        />

        <div className="black_overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 "></div>

        <div className="container relative z-10 text-white min-w-full  min-h-screen p-3">
          <div className="bottom flex justify-center items-center h-full w-full flex-col mt-[18em]">
            <span className="text-[2em]">Lamajeure</span>
            <h2 className="text-[5vw] group-hover:underline font-[Lausanne-500]">
              Lamajeure
            </h2>
          </div>
        </div>
      </section>

      <section className="relative group min-h-screen rounded-[2em] overflow-hidden ">
        <img
          className="object-cover object-top w-full h-full inset-0 group-hover:scale-105 absolute transition-transform duration-500 "
          src="/Imgs/imgi_35_Fruite_thumbnail_bbq.jpg"
          alt=""
        />

        <div className="black_overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 "></div>

        <div className="container relative z-10 text-white min-w-full  min-h-screen p-3">
          <div className="bottom flex justify-center items-center h-full w-full flex-col mt-[18em]">
            <span className="text-[2em]">Lassonde</span>
            <h2 className="text-[5vw] group-hover:underline font-[Lausanne-500]">
              Fruité
            </h2>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Page1;
