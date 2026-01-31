import React from "react";
import Video from "./Video";

function HomeHeroText() {
  return (
    <>
      <h1 className="home_hero_text text-white font-[Lausanne-300] uppercase text-[clamp(1rem,9.5vw,11rem)] leading-[0.88] text-center mt-3 ">
        <div className="" >
          <span>L'étincelle</span>
        </div>

        <div className="flex items-center justify-center">
          <span>qui</span>

          <div className="small_video h-[0.73em] w-[1.66em] rounded-full overflow-hidden relative -mt-[0.2em] m-0 inline-block  ">
            <Video />
          </div>

          <span>génère</span>
        </div>

        <div>
          <span>La</span>
          <mark className="bg-transparent text-white pl-5">créativité</mark>
        </div>
      </h1>
    </>
  );
}

export default HomeHeroText;
