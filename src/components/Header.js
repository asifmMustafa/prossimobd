import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 z-10 m-10 w-[95%] flex justify-center">
      <div className="w-[95%] p-3 flex justify-between rounded-lg bg-white">
        <img src="/images/logo-navbar.png" />
        <div className="flex flex-row items-center space-x-5 mr-4 font-outfit-light text-l tracking-wide">
          <p className="hover:text-orange cursor-pointer">Home</p>
          <p className="hover:text-orange cursor-pointer">Companies</p>
          <p className="hover:text-orange cursor-pointer">About Us</p>
          <p className="hover:text-orange cursor-pointer">Board of Directors</p>
          <p className="hover:text-orange cursor-pointer">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
