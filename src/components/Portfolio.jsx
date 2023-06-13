import React from "react";
import { Link } from "react-router-dom";
import { IKImage } from "imagekitio-react";

import { ImageData } from "./ImageData";

const urlEndpoint = "https://ik.imagekit.io/kianmalakooti/";

const PortfolioItem = () => {
  return (
    <>
      <Link to={`/portfolio/africa`} className="p-2 relative cursor-pointer">
        <IKImage
          className="mb-4 rounded-xl"
          urlEndpoint={urlEndpoint}
          path="africa/portfolio-1.jpg"
          loading="lazy"
          transformation={[
            {
              quality: 100,
              height: 400,
            },
          ]}
        />
        <p className="absolute bottom-6 right-4 p-2 text-2xl sm:text-lg font-semibold text-white">
          Africa
        </p>
      </Link>
      <Link
        to={`/portfolio/graduation`}
        className="p-2 relative cursor-pointer"
      >
        <IKImage
          className="mb-4 rounded-xl"
          urlEndpoint={urlEndpoint}
          path="graduation/justin.jpg"
          loading="lazy"
          transformation={[
            {
              quality: 100,
              height: 400,
            },
          ]}
        />
        <p className="absolute bottom-6 right-4 p-2 text-2xl sm:text-lg font-semibold text-white">
          Africa
        </p>
      </Link>
      <Link to={`/portfolio/africa`} className="p-2 relative cursor-pointer">
        <IKImage
          className="mb-4 rounded-xl"
          urlEndpoint={urlEndpoint}
          path="collabs/crook-1.jpg"
          loading="lazy"
          transformation={[
            {
              quality: 100,
              height: 400,
            },
          ]}
        />
        <p className="absolute bottom-6 right-4 p-2 text-2xl sm:text-lg font-semibold text-white">
          Africa
        </p>
      </Link>
    </>
  );
};

const Portfolio = () => {
  return (
    <div name="portfolio" className="flex flex-wrap py-32 justify-center">
      <h2 className="w-full font-bold text-8xl md:text-5xl xs:text-[2.8rem] mb-20 text-center md:mb-16 text-gray-800">
        Portfolio 📸
      </h2>
      <ul className="flex justify-center md:flex-col md:items-center lg:w-[80%]">
        <PortfolioItem />
      </ul>
    </div>
  );
};

export default Portfolio;
