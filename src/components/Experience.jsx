import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noreferrer"
            className="text-red-700"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-gray-800 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div name="experience" className="py-32 md:py-20 xs:py-16 bg-gray-100">
      <h2 className="w-full font-bold text-8xl md:text-5xl xs:text-[2.8rem] mb-20 text-center md:mb-16">
        Experience 🏢
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 md:top-3 w-[4px] h-full bg-gray-800 origin-top md:w-[2px] md:left-[30px] xs:left-[19px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-0">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="This is the filler description for the experience that I'm going to talk about later. This is the filler description for the experience that I'm going to talk about later. This is the filler description for the experience that I'm going to talk about later."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="This is the filler description for the experience that I'm going to talk about later. This is the filler description for the experience that I'm going to talk about later. This is the filler description for the experience that I'm going to talk about later."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="This is the filler description for the experience that I'm going to talk about later. This is the filler description for the experience that I'm going to talk about later. This is the filler description for the experience that I'm going to talk about later."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="This is the filler description for the experience that I'm going to talk about later. This is the filler description for the experience that I'm going to talk about later. This is the filler description for the experience that I'm going to talk about later."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
