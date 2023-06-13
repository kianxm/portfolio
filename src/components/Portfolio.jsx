import React from "react";
import { Link } from "react-router-dom";
import { IKImage } from "imagekitio-react";

import SECTIONIMAGES from "./PortfolioImageData";

const urlEndpoint = "https://ik.imagekit.io/kianmalakooti/";

const Portfolio = () => {
  return (
    <div name="portfolio" className="flex flex-wrap py-32 justify-center">
      <h2 className="w-full font-bold text-8xl md:text-5xl xs:text-[2.8rem] mb-20 text-center md:mb-16 text-gray-800">
        Portfolio 📸
      </h2>
      <div className="flex justify-center md:flex-col md:items-center lg:w-[80%]">
        {SECTIONIMAGES.slice(0, 3).map(
          ({ id, title, name, description, detailedImages, path }) => (
            <Link
              to={`/portfolio/${name}`}
              key={id}
              className="p-2 relative cursor-pointer"
            >
              <IKImage
                className="mb-4 rounded-xl"
                urlEndpoint={urlEndpoint}
                path={path}
                loading="lazy"
                transformation={[
                  {
                    quality: 100,
                    height: 400,
                  },
                ]}
              />
              <p className="absolute bottom-6 right-4 p-2 text-2xl sm:text-lg font-semibold text-white">
                {title}
              </p>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Portfolio;
