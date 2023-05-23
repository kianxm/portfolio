import React from "react";
import stpraiImage from "../images/stprai.png";
import { BsCodeSlash } from "react-icons/bs";
import { ImCodepen } from "react-icons/im";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "STPR.AI",
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
      description:
        "Enabling prospective students at Santa Clara University to experience dorm life and sociality with Matterport technology.",
      languages: ["React", "Matterport"],
      demoLink: "",
      codeLink: "",
      alt: "vr-dorm-tours",
    },
  ];

  return (
    <div className="w-full h-full bg-white items-center">
      <h1 className="text-4xl p-12 mt-24 font-bold text-center">Portfolio</h1>
      {projects.map(
        ({ id, name, description, link, languages, demoLink, codeLink, alt }) =>
          id % 2 != 0 ? (
            <div className="w-7/12 mx-auto bg-white p-8 rounded-3xl shadow-xl hover:shadow-cyan-500/40 transition-all duration-500 mb-12">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex-1 text-center">
                  <img
                    src={stpraiImage}
                    alt={alt}
                    className="md:max-w-[30vw] sm:max-w-72 rounded-3xl shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center px-20 text-gray-800">
                  <h3 className="text-3xl font-bold mb-4">{name}</h3>
                  <p className="text-1xl mb-4 font-medium text-gray-700">
                    {description}
                  </p>
                  <div className="mt-12 flex flex-wrap justify-center gap-4 mb-4">
                    <p className="bg-white text-gray-800 my-auto px-2 py-1 font-semibold rounded-md  shadow-lg">
                      {languages[0]}
                    </p>
                    <p className="bg-white text-gray-800 my-auto px-2 py-1 font-semibold rounded-md  shadow-lg">
                      {languages[1]}
                    </p>
                  </div>
                  <div className="justify-center flex flex-row gap-4 text-xl">
                    <a
                      target="_blank"
                      href={demoLink}
                      rel="noreferrer"
                      className="group text-grey-800 w-fit px-2 py-1 flex items-center rounded-lg font-semibold hover:text-red-700 duration-300"
                    >
                      Devpost
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
          ) : (
            <div className="w-7/12 mx-auto bg-white p-8 rounded-3xl shadow-xl hover:shadow-red-700/40 transition-all duration-500 mb-12">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex-1 text-center md:order-last">
                  <img
                    src={stpraiImage}
                    alt={alt}
                    className="md:max-w-[30vw] sm:max-w-72 rounded-3xl shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center px-20 text-gray-800">
                  <h3 className="text-3xl font-bold mb-4">{name}</h3>
                  <p className="text-1xl mb-4 font-medium text-gray-700">
                    {description}
                  </p>
                  <div className="mt-12 flex flex-wrap justify-center gap-4 mb-4">
                    <p className="bg-white text-gray-800 my-auto px-2 py-1 font-semibold rounded-md  shadow-lg">
                      {languages[0]}
                    </p>
                    <p className="bg-white text-gray-800 my-auto px-2 py-1 font-semibold rounded-md  shadow-lg">
                      {languages[1]}
                    </p>
                  </div>
                  <div className="justify-center flex flex-row gap-4 text-xl">
                    <a
                      target="_blank"
                      href={demoLink}
                      rel="noreferrer"
                      className="group text-grey-800 w-fit px-2 py-1 flex items-center rounded-lg font-semibold hover:text-red-700 duration-300"
                    >
                      Devpost
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
