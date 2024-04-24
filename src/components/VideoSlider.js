import React, { useRef } from "react";
import Slider from "react-slick";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import VideoPlayer from "./VideoPlayer";

import "../slick-styles/slick.css";
import "../slick-styles/slick-theme.css";

const VideoSlider = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const sliderSettings = {
    arrows: false,
    className: "center",
    centerMode: true,
    centerPadding: "200px",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="mb-20">
      <Slider ref={sliderRef} {...sliderSettings}>
        <VideoPlayer src="/videos/demo.mp4" />
        <VideoPlayer src="/videos/demo.mp4" />
        <VideoPlayer src="/videos/demo.mp4" />
      </Slider>

      <div className="flex flex-row justify-center gap-4 mt-5">
        <div onClick={previous}>
          <LeftArrow />
        </div>
        <div onClick={next}>
          <RightArrow />
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
