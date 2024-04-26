import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects = () => {
  const completed_projects = [
    {
      img: "/images/ProssimoRoyal.jpg",
      name: "Prossimo Royal",
      location: "Paribagh, Dhaka",
      type: "Residential",
      area: "36,000 sft (10 Storied Building)",
    },
    {
      img: "/images/ProssimoPresidency.jpg",
      name: "Prossimo Presidency",
      location: "Paribagh, Dhaka",
      type: "Residential",
      area: "36,000 sft (10 Storied Building)",
    },
    {
      img: "/images/IslampurComplex.jpg",
      name: "Islampur Complex",
      location: "Islampur, Dhaka",
      type: "Textile Complex",
      area: "2,42,000 sft (10 Storied building)",
    },
  ];

  const ongoing_projects = [
    {
      img: "/images/NobabpurComplex.jpg",
      name: "Nababpur Complex",
      location: "Nababpur, Dhaka",
      type: "Commercial",
      area: "3,20,000 sft (10 Storied Building)",
    },
    {
      img: "/images/NoorLaxmibazzarHeights.jpg",
      name: "LaxmiBazzar Heights",
      location: "LaxmiBazzar, Dhaka",
      type: "Residential Cum Shopping mall",
      area: "90,000 sft (14 Storied Building)",
    },
  ];

  return (
    <section className="relative">
      <Header />

      <div id="projects" className="px-10 pt-44">
        <div className="text-center">
          <p className="mb-4 font-outfit-light text-xl text-center tracking-wide text-orange">
            PDL PROJECTS
          </p>
          <h3 className="font-outfit-heavy md:text-5xl text-3xl text-center">
            Notable Completed
            <br />
            Projects
          </h3>
        </div>

        <div className="sm:pt-20 pt-10 pb-10 flex flex-col items-center justify-center">
          {completed_projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex md:flex-row flex-col items-center justify-center lg:w-[80%] md:w-[90%] lg:mb-20 mb-10"
              >
                <div
                  className={`md:w-1/2 w-[90%] flex items-center justify-center ${
                    (index + 1) % 2 === 0 ? "order-2" : "md:order-1 order-2"
                  }`}
                >
                  <img
                    className="rounded-[5%]"
                    src={project.img}
                    alt={project.name}
                  />
                </div>
                <div
                  className={`md:w-1/2 w-full p-10 flex flex-col md:items-start items-center justify-center md:text-left text-center md:order-1 order-2`}
                >
                  <h3 className="font-outfit-heavy md:text-5xl text-3xl md:text-start text-center">
                    {project.name}
                  </h3>
                  <p className="mt-8 font-outfit-semilight text-xl text-slate-600 tracking-wide">
                    Location: {project.location}
                  </p>
                  <p className="mt-1 font-outfit-semilight text-xl text-slate-600 tracking-wide">
                    Type of Project: {project.type}
                  </p>
                  <p className="mt-1 font-outfit-semilight text-xl text-slate-600 tracking-wide">
                    Construction area: {project.area}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <h3 className="font-outfit-heavy md:text-5xl text-3xl text-center">
            Notable Ongoing
            <br />
            Projects
          </h3>
        </div>

        <div className="sm:pt-20 pt-10 pb-10 flex flex-col items-center justify-center">
          {ongoing_projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex md:flex-row flex-col items-center justify-center lg:w-[80%] md:w-[90%] lg:mb-20 mb-10"
              >
                <div
                  className={`md:w-1/2 w-[90%] flex items-center justify-center ${
                    (index + 1) % 2 === 0 ? "order-2" : "md:order-1 order-2"
                  }`}
                >
                  <img
                    className="rounded-[5%]"
                    src={project.img}
                    alt={project.name}
                  />
                </div>
                <div
                  className={`md:w-1/2 w-full p-10 flex flex-col md:items-start items-center justify-center md:text-left text-center md:order-1 order-2`}
                >
                  <h3 className="font-outfit-heavy md:text-5xl text-3xl md:text-start text-center">
                    {project.name}
                  </h3>
                  <p className="mt-8 font-outfit-semilight text-xl text-slate-600 tracking-wide">
                    Location: {project.location}
                  </p>
                  <p className="mt-1 font-outfit-semilight text-xl text-slate-600 tracking-wide">
                    Type of Project: {project.type}
                  </p>
                  <p className="mt-1 font-outfit-semilight text-xl text-slate-600 tracking-wide">
                    Construction area: {project.area}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <h3 className="font-outfit-heavy md:text-5xl text-3xl text-center">
            Notable Upcoming Project
          </h3>
        </div>

        <div className="pt-10 pb-10 flex flex-col items-center justify-center">
          <div
            className={`md:w-1/2 w-full p-10 flex flex-col items-center justify-center md:text-left text-center md:order-1 order-2`}
          >
            <h3 className="font-outfit-heavy md:text-4xl text-3xl md:text-start text-center">
              Prossimo Clock Tower
            </h3>
            <p className="mt-8 font-outfit-semilight text-xl text-slate-600 tracking-wide">
              Location: Mayakatra, Sadarghat, Dhaka
            </p>
            <p className="mt-1 font-outfit-semilight text-xl text-slate-600 tracking-wide">
              Type of Project: Commercial
            </p>
            <p className="mt-1 font-outfit-semilight text-xl text-slate-600 tracking-wide">
              Construction area: 40 Storied Building
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Projects;
