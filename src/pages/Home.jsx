import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";
import HomeLink from "../components/home/HomeLink";

function Home() {
  return (
    // Semantic <main> tag to wrap the main content of the page
    <div className=" overflow-hidden relative min-h-screen ">
      <section className="home_content relative flex justify-between min-h-screen flex-col border-2 p-2">
        <HomeHeroText />

        <div className="bottom_wrapper flex flex-col ">
          <HomeBottomText className="mt-auto" />
          <HomeLink />
        </div>
      </section>

      {/* inset-0 => top: 0; right: 0; bottom: 0; left: 0; This makes the video div to stretch to the full screen */}
      <figure className="video_bg inset-0  -z-10 fixed ">
        <Video />
      </figure>
    </div>
  );
}

export default Home;
