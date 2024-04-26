import React, { useState } from "react";

const Profile = ({ index, director }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex md:flex-row flex-col items-center justify-center lg:w-[80%] md:w-[90%] lg:mb-20 mb-10">
      <div
        className={`md:w-1/2 w-[90%] flex items-center justify-center ${
          (index + 1) % 2 === 0 ? "order-2" : "md:order-1 order-2"
        }`}
      >
        <img className="rounded-[5%]" src={director.img} alt={director.name} />
      </div>
      <div
        className={`md:w-1/2 w-full p-10 flex flex-col md:items-start items-center justify-center md:text-left text-center md:order-1 order-2`}
      >
        <p className="mb-4 font-outfit-light text-xl text-center tracking-wide text-orange">
          {director.position}
        </p>
        <h3 className="font-outfit-heavy md:text-5xl text-3xl md:text-start text-center">
          {director.name}
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: isExpanded
              ? director.description
              : `${director.description.split("<br /><br />")[0]}...`,
          }}
          className="mt-8 font-outfit-semilight text-sm text-slate-600 tracking-wide"
        ></p>
        <p
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-10 font-outfit-medium cursor-pointer"
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </p>
      </div>
    </div>
  );
};

const Directors = () => {
  const directors = [
    {
      img: "/images/chairman.jpg",
      position: "CHAIRMAN",
      name: "Mohammad Shajahan Siraj",
      description:
        "Mohammad Shajahan Siraj, the chairman of Prossimo Developments Ltd (PDL), is a successful entrepreneur and a noted business tycoon in Bangladesh. He hails from a lineage of entrepreneurs who were among the first to contribute directly to growth of private sector economy in Bangladesh like Construction and Real-estate Sector, Cement, Textile, Hardware as well as Electric and Electronic goods manufacturing or imports after independence.<br /><br />Mr. Siraj is an active member in the key trade federations and associations in Bangladesh. Such federations include the Federation of Bangladesh Chamber of Commerce and Industry, Dhaka Chamber of Commerce and Industry, etc. He is also the General Secretary of Bangladesh Auto Bricks Manufacturers Association and holds a lifetime membership of Islampur Cloth Merchant Association. Due to his amiable nature and sociability, he is very well regarded among these circles.<br /><br />Mr. Siraj started his journey as an entrepreneur in July 2003 filling the shoes of a Director in the Board of Directors of the one of the oldest and most renowned real estate developers in Bangladesh, Babuli Construction and Consultant (Private) Ltd. From there he went on to establish his own real estate business under the banner of Prossimo Developments Ltd. in 2008.<br /><br />Success caught up to him swiftly as a reward of his visionary traits as he became one of the few pioneers in clean power and clean building industries of Bangladesh with his enterprises like Noor Eco Bricks Ltd. and Noor Power Ltd. Mr. Siraj also proved his versatility and keen business acumen with his enterprise, Bismillah Telecom Service Ltd.(BTSL), which revolutionized Internet Service, Data Communication Service, IP Telephony Service and IT infrastructure development in Bangladesh.<br /><br />In conclusion, his entrepreneurial journey reflects not only his remarkable success but also his impactful contributions to the diversification and advancement of various sectors in Bangladesh.",
    },
    {
      img: "/images/vice-chairman.JPG",
      position: "VICE CHAIRMAN",
      name: "Sana Aziz",
      description:
        "Sana Aziz, a business professional with a solid academic foundation, serves as the Vice Chairman of Prossimo Developments Ltd (PDL). Armed with an Undergraduate degree in Business Studies and a Masters in Management, she brings a wealth of knowledge and expertise to her role.  As one of the foundational pillars during the inception of PDL, Sana Aziz played a vital role in shaping the organization's trajectory. Her strategic foresight and unwavering dedication to excellence were instrumental in navigating the challenges of the organization's inception, laying the groundwork for PDL’s success story.<br /><br />Mrs. Sana's academic journey, particularly her Masters in Management, has proven to be a transformative force within the conglomerate. The seamless integration of her academic insights with practical experience has enriched the leadership team with a nuanced and informed perspective. Her profound understanding of business and management principles plays a central role in shaping the strategic decisions and growth initiatives undertaken by Prossimo Developments Ltd.<br /><br />Sana Aziz's enduring commitment to the organization, coupled with her academic qualifications, makes her a key architect of PDL’s success. Her role as Vice Chairman reflects not only her professional proficiency but also her unwavering dedication to the continued advancement and prosperity of PDL.",
    },
    {
      img: "/images/managing-director.jpg",
      position: "MANAGING DIRECTOR",
      name: "MD Mujtoba Siraj",
      description:
        "Md Mujtoba Siraj is the esteemed Managing Director of Prossimo Developments Ltd (PDL), bringing a wealth of leadership experience and strategic vision to the organization. With a keen focus on integrating technology into business operations, he has positioned himself as a driving force in entrepreneurship. Renowned for his adept leadership, strategic planning, and decision-making capabilities, he has played a pivotal role in steering PDL to new heights of success.<br /><br />Guided by a visionary approach, he orchestrates organizational management with a keen emphasis on fostering effective collaboration, optimizing resource allocation, and steadfastly pursuing overarching business goals.<br /><br />In addition to his exemplary management skills, Md Mujtoba Siraj is highly regarded for his prowess in technology integration. With a keen understanding of the evolving tech landscape, he actively shapes PDL’s technological initiatives. His commitment to harnessing technology for positive impact aligns seamlessly with the organization's mission to innovate, adapt, and contribute to the advancement of industries. His  tech-savvy leadership positions PDL at the forefront of technological advancements within its respective sectors.<br /><br />As a seasoned entrepreneur, Md Mujtoba Siraj continues to navigate diverse industries, leveraging his strategic acumen to drive growth, foster innovation, and make a lasting impact.",
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
          return <Profile key={index} index={index} director={director} />;
        })}
      </div>
    </section>
  );
};

export default Directors;
