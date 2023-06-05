import React from "react";
import stpraiImage from "../images/stprai.png";
import dormImage from "../images/scudormtours.png";
import dormRender from "../images/dormdevicerender.png";
import chessImg from "../images/chessimg.webp";
import { BsCodeSlash } from "react-icons/bs";
import { ImCodepen } from "react-icons/im";

const Projects = () => {
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
      name: "Chess AI",
      image: chessImg,
      description:
        "Reengineered Chess from scratch with an AI opponent utilizing alpha-beta pruning and nega-max algorithms.",
      languages: ["Python"],
      demoLink: "",
      codeLink: "https://github.com/kianxm/chessAI",
      alt: "chess",
    },
  ];

  return (
    <div
      name="projects"
      className="w-full h-full bg-white items-center text-gray-800 pb-12"
    >
      <h1 className="text-8xl sm:text-6xl xs:text-5xl pt-32 pb-20 font-bold text-center">
        Projects 🎏
      </h1>
      {projects.map(
        ({
          id,
          name,
          image,
          description,
          languages,
          demoLink,
          codeLink,
          alt,
        }) => (
          <div
            key={id}
            className="w-6/12 2xl:w-7/12 xl:w-4/6 lg:w-5/6 mx-auto bg-white p-8 md:rounded-3xl rounded-xl shadow-xl-center hover:shadow-red-700/30 transition-all duration-500 mb-12"
          >
            <div
              className={`flex flex-row md:flex-col justify-center items-center ${
                id % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="text-center">
                <div className="w-96 h-64 2xl:w-84 xs:w-72 xs:h-48 sm:mb-8 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={image}
                    loading="lazy" //Does this work??
                    alt={alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center px-12 xl:px-8 lg:px-12">
                <h3 className="text-3xl lg:text-2xl font-bold mb-2 pt-0">
                  {name}
                </h3>
                <p className="text-md lg:text-sm font-medium text-gray-700">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-4 mb-4">
                  <p className="bg-white my-auto px-2 py-1 font-semibold rounded-md shadow-lg">
                    {languages[0]}
                  </p>
                  <p className="bg-white my-auto px-2 py-1 font-semibold rounded-md shadow-lg">
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

export default Projects;
