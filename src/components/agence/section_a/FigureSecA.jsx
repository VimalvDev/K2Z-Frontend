import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const imageArray = [
  "/imgs/imgi_1_Carl_480x640.jpg",

  "/imgs/imgi_2_Olivier_480x640.jpg",

  "/imgs/imgi_3_ChantalG_480x640.jpg",

  "/imgs/imgi_4_Michele_480X640.jpg",

  "/imgs/imgi_5_MEL_480X640.jpg",

  "/imgs/imgi_6_CAMILLE_480X640_2.jpg",

  "/imgs/imgi_7_MEGGIE_480X640_2.jpg",

  "/imgs/imgi_8_joel_480X640_3.jpg",
];

function FigureSecA() {
  const imageDiv = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(imageDiv.current, {
        scrollTrigger: {
          trigger: imageDiv.current,
          start: "top 35%",
          end: "top -90%",
          pin: true,
          pinSpacing: false,

          // onUpdate: (self) => {
          //   const index = Math.min(
          //     imageArray.length - 1,
          //     Math.floor(self.progress * imageArray.length),
          //   );
          //   console.log(imageArray[index])
          //   imageRef.current.src = imageArray[index];
          // },
        },
      });
    },
    { scope: imageDiv },
  );
console.log("chla")
  return (
    <figure  className=" absolute inset-0 z-[-1] ">

      <div
        ref={imageDiv}
        className="a_images w-[clamp(1rem,15vw,13.5rem)] h-[clamp(1rem,20vw,18.5rem)] top-[17vw] left-[30vw] relative rounded-[1.2em]  "
      >
        <img
          ref={imageRef}
          className="object-cover object-top w-full h-full "
          src={imageArray[0]}
          alt=""
        />
      </div>
    </figure>
  );
}

export default FigureSecA;
