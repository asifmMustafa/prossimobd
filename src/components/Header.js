import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const links = [
    { text: "Home", id: "hero" },
    { text: "Companies", id: "companies" },
    { text: "About Us", id: "about" },
    { text: "Board of Directors", id: "directors" },
    { text: "Projects", id: "projects" },
    { text: "Contact Us", id: "contact" },
  ];

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-20 md:w-[95%] sm:w-[89%] w-[80%] flex justify-center">
      <div className="w-[95%] lg:p-3 flex justify-between rounded-lg bg-white border-[0.5px] border-gray-400">
        <div className="flex flex-row justify-start items-center">
          <img
            onClick={() => navigate("/")}
            className="transform lg:scale-100 scale-75 cursor-pointer"
            src="/images/logo.png"
            alt="logo"
          />
          <p className="hidden lg:block font-outfit-light text-2xl tracking-wide">
            Prossimo
          </p>
        </div>
        <div className="hidden lg:flex flex-row items-center space-x-5 mr-4 font-outfit-semilight text-l tracking-wide">
          {pathname === "/" ? (
            links.map((link, index) => {
              return link.text === "Projects" ? (
                <p
                  onClick={() => navigate("/pdl-projects")}
                  className="hover:text-orange cursor-pointer"
                >
                  PDL Projects
                </p>
              ) : (
                <Link
                  key={index}
                  className="hover:text-orange cursor-pointer"
                  spy={true}
                  offset={-140}
                  smooth={true}
                  to={link.id}
                >
                  {link.text}
                </Link>
              );
            })
          ) : (
            <p
              onClick={() => navigate("/")}
              className="hover:text-orange cursor-pointer"
            >
              Home
            </p>
          )}
        </div>
        {pathname === "/" ? (
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <img
              className="w-7 h-7 mr-5"
              src="/images/hamburger.png"
              alt="Menu"
            />
          </button>
        ) : (
          <div className="lg:hidden flex items-center mr-5">
            <p
              onClick={() => navigate("/")}
              className="hover:text-orange cursor-pointer"
            >
              Home
            </p>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="lg:hidden absolute right-10 top-[80px] z-20 bg-white shadow-md rounded-lg px-5 py-2 flex flex-col items-center border-[0.5px] border-gray-400">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              {link.text === "Projects" ? (
                <p
                  onClick={() => navigate("/pdl-projects")}
                  className="py-2 hover:text-orange cursor-pointer"
                >
                  PDL Projects
                </p>
              ) : (
                <Link
                  className="py-2 hover:text-orange cursor-pointer text-center w-full"
                  spy={true}
                  offset={-120}
                  smooth={true}
                  to={link.id}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {link.text}
                </Link>
              )}
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
