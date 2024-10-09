import React from "react";
import { motion as m } from "framer-motion";
import { useCursorContext } from "../context/CursorContext";
const HomeAnimation = React.lazy(
  () => import("../components/animations/HomeAnimation")
);

const Home: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <>
      <HomeAnimation />

      <main className="w-full mt-28 md:mt-20 lg:mt-16 flex flex-col justify-center items-center gap-20 z-20">
        {/* Title */}
        <section className="overflow-hidden">
          <m.h1
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{ duration: 0.5, delay: 0.75 }}
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="font-chaney text-5xl md:text-7xl lg:text-8xl transition-all"
          >
            STUDIO
          </m.h1>
        </section>

        {/* Description */}
        <section className="w-72 md:w-1/2 text-center text-xs italic tracking-[1px] font-semibold transition-all">
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            If you’re looking for a creative agency that will help you leave
            your competitors in the dust and make them look like a bunch of
            amateurs, you just found one. We bring bold, creative ideas to live
            in projects that always push boundaries and exceed expectations.
          </m.p>
        </section>
      </main>
    </>
  );
};

export default Home;
