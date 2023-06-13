import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/kianmalakooti/";

const Animation = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gray-100">
      <div className="max-w-full mx-auto flex flex-row items-center justify-center h-full px-4 md:flex-col">
        <div className="order-1 md:order-2 px-14 lg:px-8 mr-8 xl:mr-0">
          <Animation className="text-4xl md:text-3xl sm:text-2xl font-bold text-red-700 py-4 sm:py-2 w-full text-left md:text-center">
            Software Engineer
          </Animation>
          <Animation className="text-6xl md:text-5xl sm:text-3xl font-bold text-gray-800 w-full text-left md:text-center">
            Kian Malakooti
          </Animation>
          <Animation className="text-gray-600 font-medium py-4 max-w-md text-left md:text-center sm:text-[14px] sm:py-2">
            Computer Engineer Major @ Santa Clara University 📍
          </Animation>
          <Animation>
            <Link
              to="projects"
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
          </Animation>
        </div>
        <Animation className="order-2 md:order-1  w-[20%] xl:w-1/4 lg:w-[30%] md:w-2/4 sm:w-3/4 md:mb-4">
          <IKImage
            urlEndpoint={urlEndpoint}
            path="me/hero.jpg"
            className="rounded-2xl"
          />
        </Animation>
      </div>
    </div>
  );
};

export default Home;
