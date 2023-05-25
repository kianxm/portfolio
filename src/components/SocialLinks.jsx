import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbAlignBoxLeftMiddle } from "react-icons/tb";
import resume from "../KianMalakootiResume.pdf";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kian-malakooti-18397218b/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/kianxm",
    },
    {
      id: 3,
      child: (
        <>
          Email
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:kianjmalakooti@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <TbAlignBoxLeftMiddle size={30} />
        </>
      ),
      href: resume,
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col lg:hidden top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <motion.li
            key={id}
            initial={{ x: -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: id * 0.2 }}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-red-500 to-red-700" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
