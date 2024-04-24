import React from "react";
import WelcomeSlider from "../components/WelcomeSlider";
import AboutUs from "../components/AboutUs";
import VideoSlider from "../components/VideoSlider";
import SisterConcerns from "../components/SisterConcerns";
import Directors from "../components/Directors";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <WelcomeSlider />
      <AboutUs />
      <VideoSlider />
      <SisterConcerns />
      <Directors />
      <ContactUs />
    </div>
  );
};

export default Home;
