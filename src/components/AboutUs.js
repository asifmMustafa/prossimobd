import React from "react";

const AboutUs = () => {
  const visions = [
    {
      img: "/images/GlobalDist.png",
      title: "Global Distinction",
      description:
        "Innovating for global recognition while maintaining a commitment to sustainability.",
    },
    {
      img: "/images/ProgHarmony.png",
      title: "Progressive Harmony",
      description:
        "Striking a balance between progress and environmental responsibility for a sustainable future.",
    },
    {
      img: "/images/PovErad.png",
      title: "Poverty Eradication",
      description:
        "Dedicated to eliminating poverty in our country through impactful initiatives and support.",
    },
    {
      img: "/images/SocBetterment.png",
      title: "Societal Betterment",
      description:
        "Committed to comprehensive support, aiming to transform society for the betterment of all.",
    },
  ];

  return (
    <section id="about">
      {/* ABOUT US */}
      <div>
        <h3 className="md:pt-14 md:pb-10 pt-10 pb-6 font-outfit-light text-l text-center tracking-wide text-orange">
          ABOUT US
        </h3>
        <p className="lg:px-52 md:px-32 px-10 font-outfit-heavy md:text-4xl text-xl text-center tracking-wide">
          At MSN Group, we are more than just a conglomerate; we are commitment
          to extending power to remote corners, each entity within our group
          reflects our dedication to progress and positive impact.
        </p>

        {/* STATS */}
        <div className="sm:block flex flex-col items-center text-center my-10 sm:space-x-32">
          <div className="inline-block s,:text-start">
            <span className="font-outfit-heavy md:text-4xl text-xl text-start text-orange">
              50,000+
            </span>
            <p className="sm:mt-3 mt-1 text-sm text-slate-600 tracking-wide">
              Satisfied customers
            </p>
          </div>

          <div className="inline-block sm:text-start sm:mt-0 mt-6">
            <span className="font-outfit-heavy md:text-4xl text-xl text-orange">
              6+
            </span>
            <p className="sm:mt-3 mt-1 text-sm text-slate-600 tracking-wide">
              Sister concerns
            </p>
          </div>
        </div>
      </div>

      {/* VISION */}
      <div className="flex md:flex-row flex-col p-10">
        <div className="md:px-20 mb-10">
          <p className="mb-4 font-outfit-light text-xl md:text-start text-center tracking-wide text-orange">
            VISION
          </p>
          <h3 className="font-outfit-heavy md:text-4xl text-2xl md:text-start text-center">
            Our Company
            <br />
            Visions.
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 md:text-start text-center">
          {visions.map((vision, index) => (
            <div key={index} className="px-5 pb-5">
              <img
                className="md:mx-0 mx-auto"
                src={vision.img}
                alt={vision.title}
              />
              <h4 className="mt-3 font-outfit-heavy sm:text-2xl text-xl">
                {vision.title}
              </h4>
              <p className="mt-2 text-sm text-slate-600 tracking-wide">
                {vision.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
