import React from "react";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <section className="bg-[rgb(14,26,34)] px-10 pt-10 pb-5">
      <div className="w-full flex lg:flex-row flex-col lg:justify-around border-b-2 border-white pb-10">
        <div className="lg:text-start text-center">
          <img
            className="lg:-ml-5 mx-auto"
            src="/images/Prossimo.png"
            alt="logo"
          />
          <p className="font-outfit-light text-white tracking-wide">Prossimo</p>
          <p className="font-outfit-semilight text-sm text-white tracking-wide">
            Achieve global distinction through innovation and sustainability
          </p>
        </div>

        <div className="flex flex-col lg:text-start text-center text-white lg:mt-0 mt-10">
          <p className="font-outfit-medium mb-5">Brands</p>
          <div className="font-outfit-light text-sm space-y-1">
            {[
              "Prossimo Developments Ltd",
              "Noor Eco Bricks",
              "Noor Power LTD",
              "Bismillah Telecom",
              "Mujtoba Electric & Electronics",
              "Mujtoba Hardware & Machinery",
            ].map((brand, index) => (
              <p key={index} className="hover:text-orange cursor-pointer">
                {brand}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:text-start text-center text-white lg:mt-0 mt-10">
          <p className="font-outfit-medium mb-5">Links</p>
          <div className="flex flex-col font-outfit-light text-sm space-y-1">
            {pathname === "/" ? (
              <Link
                className="hover:text-orange cursor-pointer"
                spy={true}
                smooth={true}
                to="about"
              >
                About Us
              </Link>
            ) : (
              <p
                className="hover:text-orange cursor-pointer"
                onClick={() => navigate("/")}
              >
                About Us
              </p>
            )}
            {pathname === "/" ? (
              <Link
                className="hover:text-orange cursor-pointer"
                spy={true}
                offset={-140}
                smooth={true}
                to="contact"
              >
                Contact Us
              </Link>
            ) : (
              <p
                className="hover:text-orange cursor-pointer"
                onClick={() => navigate("/")}
              >
                Contact Us
              </p>
            )}
            <Link className="hover:text-orange cursor-pointer">Sitemap</Link>
            <Link className="hover:text-orange cursor-pointer">Faq</Link>
          </div>
        </div>

        <div className="flex flex-col lg:text-start text-center text-white lg:mt-0 mt-10">
          <p className="font-outfit-medium mb-5">Connect With Us</p>
          <div className="font-outfit-light text-sm space-y-1">
            <p>Address:</p>
            <p>Nababpur Complex (6th Floor), 268</p>
            <p>Nababpur road, Dhaka-1100</p>
            <p className="text-[rgb(14,26,34)]">break</p>
            <p>Email:</p>
            <p>prossimodevelopmentsltd@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex lg:flex-row flex-col lg:justify-between lg:items-start items-center lg:text-start  text-center text-white font-outfit-light">
        <p>
          Copyright © 2024,{" "}
          <span className="text-orange cursor-pointer">prossimo.com</span>
        </p>
        <div className="flex flex-row space-x-2 lg:mt-0 mt-2">
          <p className="cursor-pointer">Privacy Policy</p>
          <p>•</p>
          <p className="cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
