import React from "react";
import WelcomeSlider from "../components/WelcomeSlider";
import AboutUs from "../components/AboutUs";
import VideoSlider from "../components/VideoSlider";
import SisterConcerns from "../components/SisterConcerns";
import Directors from "../components/Directors";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="relative">
      <Header />
      <WelcomeSlider />
      <AboutUs />
      <VideoSlider />
      <SisterConcerns />
      <Directors />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
