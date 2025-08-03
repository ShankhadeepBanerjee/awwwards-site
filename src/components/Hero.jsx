import React from "react";
import { useRef } from "react";
import { useState } from "react";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;

  const miniVideoRef = useRef(null);
  const mainVideoRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVidClick = () => {
    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSource = (index) => `videos/hero-${index}.mp4`;

  const handleVideoLoaded = () => {
    setLoadedVideos((p) => p + 1);
  };

  // console.log({ currentIndex, upcomingVideoIndex });

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVidClick}
              className="origin-center scale-50 opacity-0 transform-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                src={getVideoSource(upcomingVideoIndex)}
                ref={miniVideoRef}
                className="size-64 origin-center scale-150 object-cover object-center "
                id="current-video"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
          {/* 
          // TODO: not sure if needed, keep for now
          
          <video
            src={getVideoSource(upcomingVideoIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoad={handleVideoLoaded}
          /> */}
          <video
            src={getVideoSource(currentIndex)}
            autoPlay
            loop
            muted
            ref={mainVideoRef}
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoad={handleVideoLoaded}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>
      </div>
    </div>
  );
}

export default Hero;
