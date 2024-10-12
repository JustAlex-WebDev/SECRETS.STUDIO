import React from "react";

// Animation Library
import { motion as m } from "framer-motion";

/**
 * Handles the animation of two white layers that translate vertically across the screen.
 *
 * @returns {JSX.Element} The animated background layers.
 */
const HomeAnimation: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {/* First animation layer: slides vertically from top to bottom */}
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

      {/* Second animation layer: slower movement, starts lower on the Y-axis */}
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
    </div>
  );
};

export default HomeAnimation;
