import React from "react";

const Directors = () => {
  const directors = [
    {
      img: "/images/person-1.png",
      position: "CHAIRMAN",
      name: "MD Shajahan Siraj",
      description:
        "Mr. Siraj is an active member in the key trade federations and associations in Bangladesh. Such federations include the Federation of Bangladesh Chamber of Commerce and Industry, Dhaka chamber of commerce and Industry, etc. He is also the General Secretory of Bangladesh Auto Bricks Manufacturers Association and Life time member of Islampur Cloth Merchant Association. Due to his amiable nature and sociability, he is very well regarded among these circles.",
    },
    {
      img: "/images/person-2.png",
      position: "VICE CHAIRMAN",
      name: "Sana Aziz",
      description:
        "Sana Aziz, serving as the Vice Chairman, is a dynamic force behind the board. With a commitment to sustainable practices, she plays a crucial role in steering Noor Eco Bricks Ltd. towards its goal of manufacturing environmentally friendly bricks and achieving carbon neutrality.",
    },
    {
      img: "/images/person-3.png",
      position: "MANAGING DIRECTOR",
      name: "MD Mujtoba Siraj",
      description:
        "Mr. Siraj is an active member in the key trade federations and associations in Bangladesh. Such federations include the Federation of Bangladesh Chamber of Commerce and Industry, Dhaka chamber of commerce and Industry, etc. He is also the General Secretory of Bangladesh Auto Bricks Manufacturers Association and Life time member of Islampur Cloth Merchant Association. Due to his amiable nature and sociability, he is very well regarded among these circles.",
    },
  ];

  return (
    <section id="directors" className="px-10">
      <div className="text-center">
        <p className="mb-4 font-outfit-light text-xl text-center tracking-wide text-orange">
          DIRECTORS
        </p>
        <h3 className="font-outfit-heavy md:text-5xl text-3xl text-center">
          Meet Our Board Of
          <br />
          Directors
        </h3>
      </div>
      <div className="sm:pt-20 pt-10 pb-10 flex flex-col items-center justify-center">
        {directors.map((director, index) => {
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
                  src={director.img}
                  alt={director.name}
                />
              </div>
              <div
                className={`md:w-1/2 w-full p-10 flex flex-col md:items-start items-center justify-center md:text-left text-center md:order-1 order-2`}
              >
                <p className="mb-4 font-outfit-light text-xl text-center tracking-wide text-orange">
                  {director.position}
                </p>
                <h3 className="font-outfit-heavy md:text-5xl text-3xl text-center">
                  {director.name}
                </h3>
                <p className="md:mt-14 mt-8 font-outfit-semilight text-sm text-slate-600 tracking-wide">
                  {director.description}
                </p>
                <p className="mt-10 font-outfit-medium cursor-pointer">
                  Learn More{" "}
                  <img
                    className="inline-block ml-1"
                    src="/images/link-arrow-right.png"
                    alt="arrow"
                  />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Directors;
