import React from "react";

function Video() {
  return (
    <video
      className="h-full w-full object-cover "
      src="/69496b2d.mp4"
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
