import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const imageArray = [
  "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",

  "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",

  "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",

  "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",

  "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",

  "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",

  "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",

  "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
];

function FigureSecA() {
  const decodedImages = useRef([]);
  const imageDiv = useRef(null);
  const imageRef = useRef(null);

  // useEffect(()=>{
  //     imageArray.forEach((src)=>{
  //         const img = new Image();
  //         img.src = src;
  //     })
  // }, [])
  useEffect(() => {
    Promise.all(
      imageArray.map((src) => {
        const img = new Image();
        img.src = src;
        return img.decode().then(() => img);
      }),
    ).then((imgs) => {
      decodedImages.current = imgs;
    });
  }, []);

  useGSAP(
    () => {
      gsap.to(imageDiv.current, {
        scrollTrigger: {
          trigger: imageDiv.current,
          start: "top 35%",
          end: "top -90%",
          pin: imageDiv.current,
          pinSpacing: false,
          markers: true,

          onUpdate: (self) => {
            const index = Math.min(
              imageArray.length - 1,
              Math.floor(self.progress * imageArray.length),
            );
            const decodedImg = decodedImages.current[index];
            if (decodedImg) {
              imageRef.current.src = decodedImg.src;
            }
          },
        },
      });
    },
    { scope: imageDiv },
  );

  return (
      <figure className="absolute border-2  inset-0 z-[-1] ">
        <div
          ref={imageDiv}
          className="a_images w-[clamp(1rem,15vw,13.5rem)] h-[clamp(1rem,20vw,18.5rem)] top-[17vw] left-[30vw] relative rounded-[1.2em] overflow-hidden bg-red-500   "
        >
          <img
            ref={imageRef}
            className="object-cover object-top w-full h-full"
            src={imageArray[0]}
            alt=""
          />
        </div>
      </figure>
  );
}

export default FigureSecA;
