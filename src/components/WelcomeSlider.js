import React, { useRef } from "react";
import Slider from "react-slick";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

import "../slick-styles/slick.css";
import "../slick-styles/slick-theme.css";

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
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="home" className="relative">
      <div className="absolute lg:w-4/5 w-full top-36 lg:left-32 left-0 z-10 flex">
        <div className="lg:w-2/3 w-full lg:pt-32 pt-20 lg:pl-36 md:px-20 px-10 lg:text-start text-center">
          <p className="inline-block py-[1px] px-3 rounded-full font-outfit-semilight text-l tracking-wide text-white bg-orange">
            Where Innovation meets impact
          </p>
          <h1 className="py-5 block font-outfit-heavy lg-2:text-8xl md:text-7xl text-5xl text-white">
            Welcome To Prossimo
          </h1>
          <p className="lg:w-2/3 font-outfit-semilight text-l tracking-wide text-white">
            Step into the world of Prossimo, whether it's revolutionizing real
            estate or introducing groundbreaking technologies, we pave the way
            for a future defined by progress and purpose.
          </p>
          <button className="inline-block mt-6 py-3 px-4 rounded-md font-outfit-semilight text-l tracking-wide text-white bg-orange hover:bg-orange-light">
            Learn more
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...sliderSettings}>
        <div className="p-10 bg-[url('/public/images/bg-1.png')] bg-cover min-h-[1000px]"></div>
        <div className="p-10 bg-[url('/public/images/bg-4.jpg')] bg-cover min-h-[1000px]"></div>
        <div className="p-10 bg-[url('/public/images/bg-2.jpg')] bg-cover min-h-[1000px]"></div>
        <div className="p-10 bg-[url('/public/images/bg-3.jpg')] bg-cover min-h-[1000px]"></div>
      </Slider>

      <div
        onClick={previous}
        className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-16"
      >
        <LeftArrow />
      </div>
      <div
        onClick={next}
        className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 right-16"
      >
        <RightArrow />
      </div>
    </section>
  );
};

export default WelcomeSlider;
