import React, { useRef } from "react";
import Slider from "react-slick";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Header from "./Header";

import "../slick-styles/slick.css";
import "../slick-styles/slick-theme.css";

const InnerContent = () => (
  <div className="md-2:w-2/3 w-full pt-52 pb-32 md-2:pl-52 md-2:text-start text-center">
    <p className="inline-block py-[1px] px-3 rounded-full font-outfit-light text-l tracking-wide text-white bg-orange">
      Where Innovation meets impact
    </p>
    <h1 className="py-5 block font-outfit-heavy md-2:text-8xl text-5xl text-white">
      Welcome To MSN Group
    </h1>
    <p className="md-2:w-2/3 font-outfit-light text-l tracking-wide text-white">
      Step into the world of MSN Group, whether it's revolutionizing real estate
      or introducing groundbreaking technologies, we pave the way for a future
      defined by progress and purpose.
    </p>
    <button className="inline-block mt-6 py-3 px-4 rounded-md font-outfit-light text-l tracking-wide text-white bg-orange hover:bg-orange-light">
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
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="relative">
      <Header />

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
        className="hidden md-2:block absolute top-1/2 transform -translate-y-1/2 left-16"
      >
        <LeftArrow />
      </div>
      <div
        onClick={next}
        className="hidden md-2:block absolute top-1/2 transform -translate-y-1/2 right-16"
      >
        <RightArrow />
      </div>
    </section>
  );
};

export default WelcomeSlider;
