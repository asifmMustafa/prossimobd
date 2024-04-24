import React from "react";
import WelcomeSlider from "../components/WelcomeSlider";
import AboutUs from "../components/AboutUs";
import VideoSlider from "../components/VideoSlider";

const Home = () => {
  return (
    <div>
      <WelcomeSlider />
      <AboutUs />
      <VideoSlider />
    </div>
  );
};

export default Home;
