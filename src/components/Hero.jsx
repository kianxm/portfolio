import React from "react";
import heroImageJPG from "../images/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import { Reveal } from "./utils/Reveal";
// import { motion } from "framer-motion";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gray-100">
      <div className="max-w-full mx-auto flex flex-row items-center justify-center h-full px-4 md:flex-col">
        <div className="order-1 md:order-2 px-14 lg:px-8 mr-8 xl:mr-0">
          <h2 className="text-4xl sm:text-3xl font-bold text-red-700 py-4 w-full text-left md:text-center">
            Software Engineer
          </h2>
          <h2 className="text-6xl md:text-5xl font-bold text-gray-800 w-full text-left md:text-center">
            Kian Malakooti
          </h2>
          <p className="text-gray-600 font-medium py-4 max-w-md text-left md:text-center">
            Computer Engineer Major @ Santa Clara University 📍
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={1000}
              offset={-30}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md font-semibold bg-gradient-to-r from-red-500 to-red-700 cursor-pointer md:mx-auto"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <img
          src={heroImageJPG}
          alt="hero"
          className="order-2 md:order-1 rounded-2xl w-[20%] xl:w-1/4 lg:w-[30%] md:w-2/4 sm:w-3/4 md:mb-4"
        />
      </div>
    </div>
  );
};

export default Home;
