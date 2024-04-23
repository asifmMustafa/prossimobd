import React, { useRef } from "react";
import Slider from "react-slick";

import "../slick-styles/slick.css";
import "../slick-styles/slick-theme.css";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const InnerContent = () => (
  <div className="w-2/3 pt-52 pb-32 pl-52">
    <div className="inline-block py-[1px] px-3 rounded-full font-outfit-light text-l tracking-wide text-white bg-orange">
      Where Innovation meets impact
    </div>
    <div className="py-5 block font-outfit-heavy text-8xl text-white">
      Welcome To MSN Group
    </div>
    <p className="w-2/3 font-outfit-light text-l tracking-wide text-white">
      Step into the world of MSN Group, whether it's revolutionizing real estate
      or introducing groundbreaking technologies, we pave the way for a future
      defined by progress and purpose.
    </p>
    <button className="inline-block mt-6 py-3 px-4 rounded-md font-outfit-light text-l tracking-wide text-white bg-orange">
      Learn more
    </button>
  </div>
);

const WelcomeSlider = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...sliderSettings}>
        <div className="p-10 bg-[url('/public/images/bg.png')] bg-cover">
          <InnerContent />
        </div>
        <div className="p-10 bg-[url('/public/images/bg.png')] bg-cover">
          <InnerContent />
        </div>
        <div className="p-10 bg-[url('/public/images/bg.png')] bg-cover">
          <InnerContent />
        </div>
      </Slider>
      <div
        onClick={previous}
        className="absolute top-1/2 transform -translate-y-1/2 left-16"
      >
        <LeftArrow />
      </div>
      <div
        onClick={next}
        className="absolute top-1/2 transform -translate-y-1/2 right-16"
      >
        <RightArrow />
      </div>
    </div>
  );
};

export default WelcomeSlider;
