import React from "react";
import heroImage from "../images/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gray-100">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="order-2 md:order-1">
          {/* <div className="flex flex-col justify-center h-full mt-24 md:mt-0"> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-red-700 py-4 w-full md:w-max text-center md:text-left">
            Software Engineer
          </h2>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-800 w-full md:w-max text-center md:text-left">
            Kian Malakooti
          </h2>
          <p className="text-gray-600 font-medium py-4 max-w-md text-center md:text-left">
            Computer Engineer Major @ Santa Clara University 📍
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={1000}
              className="group text-white w-fit md:mx-0 mx-auto px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-700 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={heroImage}
            alt="hero"
            className="rounded-2xl mx-auto w-3/5 md:w-50 mb-12 md:mb-0"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
