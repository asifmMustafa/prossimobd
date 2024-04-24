import React, { useState, useRef } from "react";

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    togglePlay();
  };

  return (
    <div className="relative w-full video-slides">
      <video
        ref={videoRef}
        className="md:rounded-3xl rounded-xl w-full cursor-pointer"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        muted
      >
        <source src={src} type="video/mp4" />
      </video>
      {!isPlaying && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-24 md:h-24 w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange md:text-5xl text-xl"
          onClick={handleButtonClick}
        >
          ▶
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
