import React from "react";
import stpraiImage from "../images/stprai.png";
import dormImage from "../images/scudormtours.png";
import dormRender from "../images/dormdevicerender.png";
import { BsCodeSlash } from "react-icons/bs";
import { ImCodepen } from "react-icons/im";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "STPR.AI",
      image: stpraiImage,
      description:
        "Empowering the elderly community with step-by-step tech solutions through STPR.AI.",
      languages: ["Javascript", "OpenAI"],
      demoLink: "https://devpost.com/software/tech-support-bot",
      codeLink: "https://github.com/kianxm/STPR.AI",
      alt: "stpr-ai",
    },
    {
      id: 2,
      name: "VR Dorm Tours",
      image: dormImage,
      description:
        "Enabling prospective students at Santa Clara University to experience dorm life and sociality with Matterport technology.",
      languages: ["React", "Matterport"],
      demoLink: "https://scudormtours.vercel.app/",
      codeLink: "https://github.com/kianxm/dorm-tours",
      alt: "vr-dorm-tours",
    },
    {
      id: 3,
      name: "VR Dorm Tours",
      image: dormRender,
      description:
        "Enabling prospective students at Santa Clara University to experience dorm life and sociality with Matterport technology.",
      languages: ["React", "Matterport"],
      demoLink: "https://scudormtours.vercel.app/",
      codeLink: "https://github.com/kianxm/dorm-tours",
      alt: "vr-dorm-tours",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full h-full bg-gray-100 items-center text-gray-800 pb-12"
    >
      <h1 className="text-4xl p-3 pt-20 font-bold text-center">Portfolio</h1>
      <h2 className="md:text-lg text-md pb-5 font-medium text-center italic">
        Check out some of my recent work!
      </h2>
      {projects.map(
        ({
          id,
          name,
          image,
          description,
          link,
          languages,
          demoLink,
          codeLink,
          alt,
        }) => (
          <div className="md:w-6/12 max-sm:w-5/6 mx-auto bg-white p-8 md:rounded-3xl rounded-xl shadow-xl-center hover:shadow-red-700/30 transition-all duration-500 mb-12">
            <div
              className={`flex flex-col justify-center items-center ${
                id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex-1 text-center">
                <div className="w-72 h-48 sm:w-[24vw] sm:h-72 md:rounded-3xl rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center px-20">
                <h3 className="text-3xl font-bold mb-4 pt-8 md:pt-0">{name}</h3>
                <p className="text-1xl font-medium text-gray-700">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-4 mb-4">
                  <p className="bg-white my-auto px-2 py-1 font-semibold rounded-md  shadow-lg">
                    {languages[0]}
                  </p>
                  <p className="bg-white my-auto px-2 py-1 font-semibold rounded-md  shadow-lg">
                    {languages[1]}
                  </p>
                </div>
                <div className="justify-center flex flex-row gap-4 md:text-xl sm:text-lg">
                  <a
                    target="_blank"
                    href={demoLink}
                    rel="noreferrer"
                    className="group text-grey-800 w-fit px-2 py-1 flex items-center rounded-lg font-semibold hover:text-red-700 duration-300"
                  >
                    Demo
                    <span>
                      <ImCodepen className="ml-3" />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    href={codeLink}
                    rel="noreferrer"
                    className="group text-gray-800 w-fit px-2 py-1 flex items-center rounded-lg font-semibold hover:text-red-700 duration-300"
                  >
                    Code
                    <span>
                      <BsCodeSlash className="ml-3" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Portfolio;
