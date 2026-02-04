import React from "react";

function Video() {
  return (
    <video
      className="h-full w-full object-cover "
      src="/public/videoK2z.mp4"
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      aria-hidden="true"
    ></video>
  );
}

export default Video;
