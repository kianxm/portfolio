import React from "react";
import { IKImage } from "imagekitio-react";

import IMAGES from "./PortfolioImages";

const urlEndpoint = "https://ik.imagekit.io/kianmalakooti/";

const Portfolio = () => {
  return (
    <div className="flex flex-wrap py-32 justify-center">
      <h2 className="w-full font-bold text-8xl md:text-5xl xs:text-[2.8rem] mb-20 text-center md:mb-16 text-gray-800">
        Portfolio 📸
      </h2>
      <div className="flex justify-center w-[80%] lg:w-full">
        {IMAGES.slice(0, 6).map(({ id, path }) => (
          <div key={id} className="p-2">
            <IKImage
              urlEndpoint={urlEndpoint}
              path={path}
              loading="lazy"
              transformation={[
                {
                  height: 300,
                },
              ]}
              className="mb-4 rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-[80%] lg:hidden">
        {IMAGES.slice(6, 14).map(({ id, path }) => (
          <div key={id} className="p-2">
            <IKImage
              urlEndpoint={urlEndpoint}
              path={path}
              loading="lazy"
              transformation={[
                {
                  height: 300,
                },
              ]}
              className="mb-4 rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-[80%] lg:w-full">
        {IMAGES.slice(14, 21).map(({ id, path }) => (
          <div key={id} className="p-2">
            <IKImage
              urlEndpoint={urlEndpoint}
              path={path}
              loading="lazy"
              transformation={[
                {
                  height: 300,
                },
              ]}
              className="mb-4 rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-[80%] lg:hidden">
        {IMAGES.slice(21, 27).map(({ id, path }) => (
          <div key={id} className="p-2">
            <IKImage
              urlEndpoint={urlEndpoint}
              path={path}
              loading="lazy"
              transformation={[
                {
                  height: 300,
                },
              ]}
              className="mb-4 rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
