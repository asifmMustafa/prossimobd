import React from "react";

const ContactUs = () => {
  const contacts = [
    {
      img: "/images/location.png",
      name: "Address",
      text: "Nababpur Complex (6th Floor), 268 Nababpur road, Dhaka-1100",
    },
    {
      img: "/images/email.png",
      name: "Email",
      text: "msngroupbd24@gmail.com",
    },
    {
      img: "/images/phone.png",
      name: "Phone",
      text: "msngroupbd24@gmail.com",
    },
  ];

  return (
    <section id="contact">
      <div className="text-center">
        <p className="mb-4 font-outfit-light text-xl text-center tracking-wide text-orange">
          CONTACT
        </p>
        <h3 className="font-outfit-heavy md:text-5xl text-3xl text-center">
          Get In Touch
        </h3>
      </div>

      <div className="flex lg:flex-row flex-col justify-center m-10 md-2:px-32">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="lg:w-1/3 w:1/2 lg:mb-0 mb-10 flex flex-row lg:justify-center items-center gap-5"
          >
            <img className="" src={contact.img} />
            <div>
              <p className="font-outfit-semilight lg:text-base text-sm text-slate-600">
                {contact.name}
              </p>
              <p className="font-outfit-light lg:text-base text-sm">
                {contact.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex lg:flex-row flex-col m-10 md-2:p-20">
        <div className="lg:w-1/2 lg:px-10 flex flex-col">
          <div className="w-full flex flex-row gap-5">
            <div className="w-1/2">
              <label for="name" className="block font-outfit-light mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full block bg-[#F5F5F5] text-slate-600 font-outfit-semilight px-3 py-2 rounded-lg"
              ></input>
            </div>
            <div className="w-1/2">
              <label for="email" className="block font-outfit-light mb-2">
                Email
              </label>
              <input
                name="email"
                type="text"
                placeholder="Your Email"
                className="w-full block bg-[#F5F5F5] text-slate-600 font-outfit-semilight px-3 py-2 rounded-lg"
              ></input>
            </div>
          </div>
          <div className="w-full mt-8">
            <label for="subject" className="block font-outfit-light mb-2">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              placeholder="Your Subject"
              className="w-full block bg-[#F5F5F5] text-slate-600 font-outfit-semilight px-3 py-2 rounded-lg"
            ></input>
          </div>
          <div className="w-full mt-8">
            <label for="message" className="block font-outfit-light mb-2">
              Message
            </label>
            <textarea
              name="message"
              type="text"
              placeholder="Your Message"
              rows={10}
              className="w-full block bg-[#F5F5F5] text-slate-600 font-outfit-semilight px-3 py-2 rounded-lg"
            ></textarea>
          </div>
          <button className="mt-6 py-3 px-4 rounded-md font-outfit-semilight text-l tracking-wide text-white bg-orange hover:bg-orange-light">
            Send Message
          </button>
        </div>

        <img className="lg:w-1/2 lg:my-0 my-10" src="/images/map.png" />
      </div>
    </section>
  );
};

export default ContactUs;
