import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
    <div className="flex justify-between items-center w-full h-20 px-4 fixed bg-white shadow-md z-50">
      <div>
        <h1 className="md:text-4xl text-3xl text-gray-800 font-bold md:ml-12 ml-0">
          kian.dev
        </h1>
      </div>

      <ul className="hidden md:flex md:mr-4 mr-0">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-semibold text-xl text-gray-800 relative group"
          >
            <Link to={link} smooth duration={1000}>
              {link}
            </Link>
            <span className="absolute left-1 bottom-[-10px] w-0 h-1 bg-red-700 transition-all duration-500 group-hover:w-[90%]"></span>
          </li>
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
            <li
              key={id}
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
