import React from "react";

// Context
import { useCursorContext } from "../context/CursorContext";

// Animation Libraries
import { motion as m } from "framer-motion";

// Lazy-loaded components
const HomeAnimation = React.lazy(
  () => import("../components/animations/HomeAnimation")
);

/**
 * Home component displaying the title and description with animations.
 * It utilizes Framer Motion for smooth transitions and custom cursor effects for interactivity.
 */
const Home: React.FC = () => {
  // Extract custom cursor events from the context
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <>
      {/* Animated background or visual element */}
      <HomeAnimation />

      {/* Main content container */}
      <main className="relative w-full mt-28 md:mt-20 lg:mt-16 flex flex-col justify-center items-center gap-20 z-20">
        {/* Title section */}
        <section className="overflow-hidden">
          <m.h1
            initial={{ transform: "translateY(100%)" }}
            animate={{ transform: "translateY(0%)" }}
            transition={{ duration: 0.5, delay: 0.75 }}
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
            className="font-chaney text-5xl md:text-7xl lg:text-8xl transition-all"
            role="heading"
            aria-label="Studio title"
            tabIndex={0}
          >
            STUDIO
          </m.h1>
        </section>

        {/* Description section */}
        <section className="w-72 md:w-1/2 text-center text-xs italic tracking-[1px] font-semibold transition-all">
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            aria-label="Description about the creative agency"
            tabIndex={0}
          >
            If you’re looking for a creative agency that will help you leave
            your competitors in the dust and make them look like a bunch of
            amateurs, you just found one. We bring bold, creative ideas to life
            in projects that always push boundaries and exceed expectations.
          </m.p>
        </section>
      </main>
    </>
  );
};

export default Home;
