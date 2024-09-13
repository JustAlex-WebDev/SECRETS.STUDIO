import React from "react";
import HomeAnimation from "../components/animations/HomeAnimation";
import { motion as m } from "framer-motion";
import { useCursorContext } from "../context/CursorContext";

const Home: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <>
      <HomeAnimation />

      <div className="w-full mt-28 flex flex-col justify-center items-center gap-20">
        {/* Title */}
        <div className="overflow-hidden">
          <m.div
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="font-chaney text-5xl"
          >
            STUDIO
          </m.div>
        </div>

        {/* Description */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          className="w-72 text-center text-xs italic tracking-[1px] font-semibold"
        >
          If you’re looking for a creative agency that will help you leave your
          competitors in the dust and make them look like a bunch of amateurs,
          you just found one. We bring bold, creative ideas to live in projects
          that always push boundaries and exceed expectations.
        </m.div>
      </div>
    </>
  );
};

export default Home;
