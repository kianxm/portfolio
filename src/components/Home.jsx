import React from "react";
import heroImage from "../images/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-white to-gray-300"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-24 md:mt-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-700 py-4 w-max">
            Software Engineer
          </h2>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-800  w-max">
            Kian Malakooti
          </h2>
          <p className="text-gray-600 py-4 max-w-md">
            Computer Engineer Major @ Santa Clara University 📍
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-700 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="hero"
            className="rounded-2xl mx-auto w-3/5 md:w-50 mb-24 md:mb-0"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
