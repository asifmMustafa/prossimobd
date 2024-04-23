import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    "Home",
    "Companies",
    "About Us",
    "Board of Directors",
    "Contact Us",
  ];

  return (
    <div className="absolute top-0 z-10 m-10 w-[95%] flex justify-center">
      <div className="w-[95%] p-3 flex justify-between rounded-lg bg-white">
        <img src="/images/logo-navbar.png" />
        <div className="hidden lg:flex flex-row items-center space-x-5 mr-4 font-outfit-light text-l tracking-wide">
          {links.map((link, index) => (
            <p key={index} className="hover:text-orange cursor-pointer">
              {link}
            </p>
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
        <div className="lg:hidden absolute right-10 top-[70px] z-10 bg-white shadow-md rounded-lg px-5 py-2 flex flex-col items-center">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <p className="py-2 hover:text-orange cursor-pointer text-center w-full">
                {link}
              </p>
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
