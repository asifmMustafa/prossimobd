import React from "react";

const SisterConcerns = () => {
  const concerns = [
    {
      img: "/images/Prossimo.png",
      title: "Prossimo Developments",
      description:
        "An established ISP in Bangladesh, specializing in A Category Internet services, and dedicated to strategic expansion.",
      phone: "+9601100222",
      email: "prossimodevelopmentsltd@gmail.com",
    },
    {
      img: "/images/NoorEco.png",
      title: "Noor Eco Bricks LTD",
      description:
        "NEBL is a trailblazer in environmentally friendly brick manufacturing in Bangladesh. NEBL boasts a daily production capacity of 100,000 bricks.",
      phone: "+9601100333",
      email: "acct.nebl@gmail.com",
    },
    {
      img: "/images/NoorPower.png",
      title: "Noor Power LTD",
      description:
        "NPL pioneers solar-based electricity systems, empowering rural households in Bangladesh. Leading the renewable energy industry.",
      phone: "+8801818730046",
      email: "noorpowerltd@gmail.com",
    },
    {
      img: "/images/BismillahTelco.png",
      title: "Bismillah Telecom Services LTD",
      description:
        "BTSL is a leading ICT service provider in Bangladesh, specializing in Internet, Data Communication, IP Telephony, and IT Infrastructure Development. ",
      phone: "+09638777888",
      email: "info@btsisp.com.bd",
    },
    {
      img: "/images/MujtobaElectric.png",
      title: "Mujtoba Electric & Electronics",
      description:
        "Bringing technological innovation through various gadgets, implementing user-centric solutions, and focusing on inclusivity and accessibility.",
      phone: "+8801688518491",
      email: "mujtobaelectricelectronicsltd@gmail.com",
    },
    {
      img: "/images/MujtobaHardware.png",
      title: "Mujtoba Hardware & Machineries",
      description:
        "Providing a diverse range of hardware and machine tools, incorporating cutting-edge technologies, catering to various industry levels and applications.",
      phone: "+8801915807981",
      email: "mujtobahardwardmachinetools@gmail.com",
    },
  ];

  return (
    <section id="companies">
      <div className="flex lg:flex-row flex-col p-10 sm:mb-16 mb-5">
        <div className="lg:px-20 lg:mt-5 mb-10">
          <p className="mb-4 font-outfit-light text-xl lg:text-start text-center tracking-wide text-orange">
            BRANDS
          </p>
          <h3 className="font-outfit-heavy md:text-4xl text-2xl lg:text-start text-center">
            Our Sister
            <br />
            Concerns.
          </h3>
        </div>

        <div className="lg:pl-32 grid sm:grid-cols-2 grid-cols-1 gap-5 lg:text-start text-center">
          {concerns.map((concern, index) => (
            <div key={index} className="px-5 pb-5">
              <img
                className="lg:-mx-5 mx-auto"
                src={concern.img}
                alt={concern.title}
              />
              <h4 className="mt-3 font-outfit-heavy sm:text-2xl text-xl">
                {concern.title}
              </h4>
              <p className="mt-2 font-outfit-semilight text-sm text-slate-600 tracking-wide">
                {concern.description}
              </p>
              <p className="mt-4 font-outfit-light">Reach us at:</p>
              <p className="font-outfit-light text-sm text-orange">
                {concern.phone}
              </p>
              <p className="font-outfit-light text-sm text-orange">
                {concern.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SisterConcerns;
