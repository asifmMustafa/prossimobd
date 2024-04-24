import React from "react";
import WelcomeSlider from "../components/WelcomeSlider";
import AboutUs from "../components/AboutUs";
import VideoSlider from "../components/VideoSlider";
import SisterConcerns from "../components/SisterConcerns";

const Home = () => {
  return (
    <div>
      <WelcomeSlider />
      <AboutUs />
      <VideoSlider />
      <SisterConcerns />
    </div>
  );
};

export default Home;
