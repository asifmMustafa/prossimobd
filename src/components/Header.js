import React from "react";

const Header = () => {
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
        <div className="flex flex-row items-center space-x-5 mr-4 font-outfit-light text-l tracking-wide">
          {links.map((link, index) => (
            <p key={index} className="hover:text-orange cursor-pointer">
              {link}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
