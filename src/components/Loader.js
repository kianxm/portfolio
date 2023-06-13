import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const loaderText = "key.dev";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      staggerChildren: 0.3,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Loader = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 300);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.h3
      className="flex justify-center items-center h-screen bg-gray-100"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {loaderText.split("").map((char, index) => {
        return (
          <>
            {show && (
              <motion.span
                key={char + "-" + index}
                variants={letter}
                className="font-bold text-4xl"
              >
                {char}
              </motion.span>
            )}
          </>
        );
      })}
    </motion.h3>
  );
};

export default Loader;
