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
            position="Project Manager"
            company="Santa Clara University"
            companyLink="https://www.scu.edu"
            time="2022-Present"
            address="Santa Clara, CA"
            work="I led an innovative initiative to transform dorm tours for prospective students by creating a 'digital twin' of university dorms using AR/VR technology. I managed a team of developers and ensured smooth integration for an optimal final product. By implementing the Matterport SDK with Javascript, I developed an easily accessible dorm tour on a third-party website, providing a user-friendly and immersive experience. Through daily scrum meetings, I ensured timely execution and seamless implementation. My leadership and technical expertise revolutionized the dorm touring experience, enhancing engagement for prospective students."
          />
          <Details
            position="Cybersecurity Researcher"
            company="Varian Medical Systems"
            companyLink="https://www.varian.com/"
            time="Sept 2021 - Sept 2022"
            address="Santa Clara, CA"
            work="I conducted qualitative and quantitative research to provide data-driven cybersecurity recommendations for Varian Medical Systems. I also created an internal playbook for implementing cybersecurity measures in their Software as a Service (SaaS) business model. Additionally, I investigated the cloud computing industry's cybersecurity practices and standards. My research-driven approach strengthened cybersecurity for Varian Medical Systems and ensured alignment with industry best practices."
          />
          <Details
            position="Freelance Photography Intern"
            company="Premium Art Photo"
            companyLink="http://www.guampap.com/"
            time="Aug 2019 - Oct 2019"
            address="Hagåtña, GU"
            work="Through this internship, I learned how to take studio-level photos and edit them with various softwares such as Adobe Photoshop and Lightroom. I gained experience in the industry and have applied what I learned to my photography portfolio."
          />
          <Details
            position="Information Technology Assistant"
            company="Animal Medical Clinic"
            companyLink="http://www.amcguam.com"
            time="Jan 2018 - May 2018"
            address="Tamuning, GU"
            work="I repaired and maintained the company's computer systems, both hardware and software. This included installing and configuring servers for Avimark software distribution. I also regulated user access to protect sensitive files and provided technical support to address software and hardware inquiries."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
