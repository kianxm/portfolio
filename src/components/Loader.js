import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="loader">
      <motion.div></motion.div>
    </div>
  );
};

export default Loader;
