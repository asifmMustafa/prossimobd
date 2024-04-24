import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { text: "Home", id: "home" },
    { text: "Companies", id: "companies" },
    { text: "About Us", id: "about" },
    { text: "Board of Directors", id: "directors" },
    { text: "Contact Us", id: "contact" },
  ];

  return (
    <div className="absolute top-0 z-20 m-10 md:w-[95%] sm:w-[89%] w-[80%] flex justify-center">
      <div className="w-[95%] p-3 flex justify-between rounded-lg bg-white">
        <img src="/images/logo.png" alt="logo" />
        <div className="hidden lg:flex flex-row items-center space-x-5 mr-4 font-outfit-semilight text-l tracking-wide">
          {links.map((link, index) => (
            <Link
              key={index}
              className="hover:text-orange cursor-pointer"
              spy={true}
              smooth={true}
              to={link.id}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <img
            className="w-7 h-7 mr-2"
            src="/images/hamburger.png"
            alt="Menu"
          />
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute right-10 top-[110px] z-20 bg-white shadow-md rounded-lg px-5 py-2 flex flex-col items-center">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <Link
                className="py-2 hover:text-orange cursor-pointer text-center w-full"
                spy={true}
                smooth={true}
                to={link.id}
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.text}
              </Link>
              {index < links.length - 1 && (
                <hr className="border-t border-gray-300 w-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
