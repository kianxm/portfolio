import React from "react";
import { RiRoadMapLine } from "react-icons/ri";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-screen h-full bg-gray-100 pt-20">
      <div className="ml-[24vw] lg:ml-0">
        <p className="text-red-700 font-bold text-xl uppercase py-4">Contact</p>
        <p className="text-gray-800 font-bold text-2xl">
          Feel free to hit me up! 👇
        </p>
        <div className="flex flex-row lg:flex-col mt-16">
          <div class="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
            <RiRoadMapLine class="text-red-700" size={30} />
          </div>
          <div className="flex flex-col ml-4">
            <p className="font-bold text-lg text-gray-800 mt-2">Location</p>
            <p className="font-medium text-xl text-gray-800">Santa Clara, CA</p>
          </div>
          <div class="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center ml-8">
            <FaMailBulk class="text-red-700" size={30} />
          </div>
          <div className="flex flex-col ml-4 mb-20">
            <p className="font-bold text-lg text-gray-800 mt-2">Mail</p>
            <p className="font-medium text-xl text-gray-800">
              kianjmalakooti@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen bg-red-700 h-12 mt-12 flex items-center justify-center">
        <p className="font-semibold text-md text-white">
          Copyright © 2023. All rights are reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
