import { motion as m } from "framer-motion";
import React from "react";

const HomeAnimation: React.FC = () => {
  return (
    <m.div
      initial={{ height: "100%" }}
      animate={{ height: "0%" }}
      transition={{
        duration: 0.375,
        delay: 1.1,
        ease: "easeIn",
      }}
      className="absolute top-0 left-0 w-full h-full overflow-hidden"
    >
      {/* First animation layer */}
      <m.div
        initial={{ transform: "translateY(0%)" }}
        animate={{ transform: "translateY(100%)" }}
        transition={{
          duration: 0.75,
          delay: 0.1,
          ease: "easeIn",
        }}
        className="absolute top-0 left-0 w-full h-full bg-white z-50"
      ></m.div>

      {/* Second animation layer */}
      <m.div
        initial={{ transform: "translateY(30%)" }}
        animate={{ transform: "translateY(100%)" }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: "ease",
        }}
        className="absolute top-0 left-0 w-full h-full bg-white z-50"
      ></m.div>
    </m.div>
  );
};

export default HomeAnimation;
