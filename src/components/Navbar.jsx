import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState();

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "timeline",
    },
    {
      id: 5,
      link: "experience",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      <div className="flex justify-between items-center w-screen h-20 px-4 fixed bg-white shadow-md z-50">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className="md:text-4xl text-3xl text-gray-800 font-bold md:ml-12 ml-0">
            kian.dev
          </h1>
        </motion.div>

        <ul className="hidden md:flex md:mr-4 mr-0">
          {links.map(({ id, link }) => (
            <motion.li
              key={id}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: id * 0.2 }}
              className="px-4 cursor-pointer capitalize font-semibold text-xl text-gray-800 relative group"
            >
              <Link to={link} smooth duration={1000}>
                {link}
              </Link>
              <span className="absolute left-1 bottom-[-10px] w-0 h-1 bg-red-700 transition-all duration-500 group-hover:w-[90%]"></span>
            </motion.li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-800 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-300 text-gray-800">
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
                className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={1000}
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
