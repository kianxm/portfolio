import React from "react";
import { IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/kianmalakooti/";

const About = () => {
  return (
    <div name="about" className="h-screen w-full bg-white">
      <div className="mx-auto flex flex-row items-center justify-center h-screen md:flex-col">
        <div>
          <IKImage
            urlEndpoint={urlEndpoint}
            path="me/professional.jpg"
            className="rounded-2xl w-96 md:w-3/5 mt-0 md:mt-24 md:mx-auto"
          />
        </div>
        <div className="flex flex-col justify-center h-full ml-16 md:ml-0 md:px-8">
          <p className="text-3xl sm:text-[25px] font-bold inline text-red-700 py-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-[28px] font-semibold text-gray-800">
            Guam ✈️ California
          </h2>
          <p className="text-gray-600 py-4 max-w-md text-[0.95rem] md:text-[15px] text-justify font-medium">
            I am a Computer Engineer with a strong passion for technology and a
            diverse skill set that includes proficiency in JavaScript, HTML,
            CSS, Python, C++, C, and Swift. With an innate ability to work well
            in teams, I have honed my leadership skills to effectively guide and
            collaborate with my peers in various projects. My dedication to
            continuous learning and growth in the ever-evolving field of
            technology drives me to seek opportunities where I can apply my
            skills and contribute to creating innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
