import React from "react";
import AboutImage from "../images/about.jpg";

const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center max-md:text-center justify-center h-full px-4 md:flex-row">
        <div>
          <img
            src={AboutImage}
            alt=""
            className="rounded-2xl w-3/5 md:w-96 mt-36 md:mt-0 mx-auto"
          ></img>
        </div>
        <div className="flex flex-col justify-center h-full ml-16 max-md:ml-0">
          <p className="text-3xl font-bold inline text-red-700 py-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            Guam ✈️ California 📍
          </h2>
          <p className="text-gray-600 py-4 max-w-md text-[0.95rem] md:text-md font-medium">
            I am an aspiring Computer Engineer with a strong passion for
            technology and a diverse skill set that includes proficiency in
            HTML, JavaScript, CSS, Python, C++, C, and Swift. With an innate
            ability to work well in teams, I have honed my leadership skills to
            effectively guide and collaborate with my peers in various projects.
            My dedication to continuous learning and growth in the ever-evolving
            field of technology drives me to seek opportunities where I can
            apply my skills and contribute to creating innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
