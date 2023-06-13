import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SECTIONIMAGES from "../components/PortfolioImageData";
import { IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/kianmalakooti/";

const PortfolioImages = () => {
  const { name } = useParams();
  const location = SECTIONIMAGES.find((location) => location.name === name);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (path) => {
    setSelectedImage(path);
    console.log(path);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const renderDetailedImages = () => {
    return (
      <div className="grid grid-cols-4 justify-center w-[80%]">
        {location.detailedImages.map(({ id, path }) => (
          <div
            key={id}
            className="p-2 cursor-pointer"
            onClick={() => handleImageClick(path)}
          >
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

      {selectedImage && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-80">
          <div className="relative max-w-3xl mx-auto">
            <button
              className="absolute top-4 right-4 p-2 text-white rounded-full bg-gray-800"
              onClick={handleCloseModal}
            >
              X
            </button>
            <IKImage
              className="max-w-full max-h-full"
              urlEndpoint={urlEndpoint}
              path={selectedImage}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioImages;
