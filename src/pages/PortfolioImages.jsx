import React from "react";
import { useParams } from "react-router-dom";
import SECTIONIMAGES from "../components/PortfolioImageData";
import { IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/kianmalakooti/";

const PortfolioImages = () => {
  const { name } = useParams();
  const location = SECTIONIMAGES.find((location) => location.name === name);

  const renderDetailedImages = () => {
    if (location.detailedImages.length === 5) {
      // Render images in a row
      return (
        <div className="flex justify-center">
          {location.detailedImages.map(({ id, path }) => (
            <div key={id} className="p-2 cursor-pointer">
              <IKImage
                className="mb-4 rounded-xl"
                urlEndpoint={urlEndpoint}
                path={path}
                loading="lazy"
                transformation={[
                  {
                    quality: 100,
                    height: 300,
                  },
                ]}
              />
            </div>
          ))}
        </div>
      );
    } else {
      // Render images in a grid when more than 5 images
      return (
        <div className="grid grid-cols-4 justify-center w-[80%]">
          {location.detailedImages.map(({ id, path }) => (
            <div key={id} className="p-2 cursor-pointer">
              <IKImage
                className="rounded-xl"
                urlEndpoint={urlEndpoint}
                path={path}
                loading="lazy"
                transformation={[
                  {
                    width: 400,
                    height: 400,
                  },
                ]}
              />
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-wrap py-32 justify-center">
      <h2 className="w-full font-bold text-8xl md:text-5xl xs:text-[2.8rem] mb-8 text-center md:mb-16 text-gray-800">
        {location.title} 📸
      </h2>
      <p className="w-full font-semibold text-3xl text-center mb-20">
        {location.description}
      </p>
      {renderDetailedImages()}
    </div>
  );
};

export default PortfolioImages;
