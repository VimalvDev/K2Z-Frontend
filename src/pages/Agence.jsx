import React from "react";
import HeadingSecA from "../components/agence/HeadingSecA";
import ParagraphSecA from "../components/agence/ParagraphSecA";
import FigureSecA from "../components/agence/FigureSecA";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Agence() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".b_section",
      start: "top 50%",
      markers:true,
      onEnter: () => {
        gsap.to([".a_section", ".b_section"], {
          backgroundColor: "#000",
          duration: 0.4,
          overwrite: "auto",
        });
        gsap.to(".b_section p", {
          color: "#fff",
        });
      },
      onLeaveBack: () => {
        gsap.to([".a_section", ".b_section"], {
          backgroundColor: "#fff",
          duration: 0.4,
          overwrite: "auto",
        });

          gsap.to([".a_heading",".a_para_right"], {
          color: "#000",
        });
      },
    });
  });

  return (
    <div>
      <div className="a_section p-4 relative overflow-x-hidden pt-[55.6vh] bg-white ">
        <FigureSecA />
        <HeadingSecA />
        <ParagraphSecA />
      </div>
      <div className="b_section h-screen bg-white text-white ">
        <p className="text-2xl p-20 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum qui facere atque animi, nulla voluptatem architecto veritatis delectus fuga dignissimos saepe, ullam alias voluptate molestias dolorum quaerat at quod maxime? Distinctio dignissimos voluptas consectetur eaque autem nemo porro itaque libero sed laboriosam voluptates nisi explicabo saepe necessitatibus excepturi quos, blanditiis id quo deserunt modi odio cum repudiandae laudantium magnam. Quas at ducimus quae excepturi dicta cupiditate quasi, recusandae autem fuga corporis, nulla labore illum veritatis fugiat numquam debitis harum? Rem modi provident sequi cumque, iste voluptatibus beatae ducimus pariatur facere magni, quod accusantium impedit commodi quasi saepe, ullam ipsa sit ea explicabo sed. Fugiat, necessitatibus vel, veniam doloremque quisquam, provident velit quae excepturi perspiciatis explicabo obcaecati quos dolore. Explicabo omnis facere dolores dolorum, culpa distinctio sed hic perferendis quidem fuga aperiam odio debitis excepturi voluptatum molestias earum assumenda. Ad saepe inventore dolorum laborum, repudiandae, cupiditate mollitia rem at enim, a eveniet. Temporibus, impedit doloremque. Aspernatur dolor vero tempore sed magni animi repudiandae, quo hic delectus. Iste molestias fugiat eum magnam ab, recusandae at. Doloremque excepturi necessitatibus non voluptatibus ut aspernatur ad provident earum in consectetur facilis error dolorum saepe dignissimos, consequatur velit illo porro sint praesentium, ullam vero tempora expedita? Sit quam illum illo placeat eius enim quibusdam molestiae repudiandae fugiat a minima minus officiis quidem fugit, voluptatum dicta, provident porro expedita quos, consequatur atque blanditiis. Voluptates quae dolores, odio officia cupiditate illo ipsum assumenda nulla veritatis sed nesciunt corrupti perferendis. Voluptate, voluptas. Nobis eaque perspiciatis quasi vitae molestias, exercitationem quam natus tempora odit iste in hic dignissimos aut blanditiis voluptatibus voluptas necessitatibus sint consectetur repellat nihil quo sit distinctio omnis? Unde, cumque ad quo corporis recusandae culpa, ducimus voluptatibus neque at animi nam possimus inventore ut odio est, minus distinctio autem a ea dignissimos nemo consequatur cum voluptate?</p>
      </div>
    </div>
  );
}

export default Agence;
