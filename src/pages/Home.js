import React from "react";
import WelcomeSlider from "../components/WelcomeSlider";
import AboutUs from "../components/AboutUs";
import VideoSlider from "../components/VideoSlider";
import SisterConcerns from "../components/SisterConcerns";
import Directors from "../components/Directors";

const Home = () => {
  return (
    <div>
      <WelcomeSlider />
      <AboutUs />
      <VideoSlider />
      <SisterConcerns />
      <Directors />
    </div>
  );
};

export default Home;
