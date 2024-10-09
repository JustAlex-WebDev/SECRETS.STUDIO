import React, { useState, useEffect } from "react";
import { ContextProviders } from "./context/ContextProviders";
import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import { motion as m } from "framer-motion";
const AnimatedBackground = React.lazy(
  () => import("./components/animations/HomeAnimationBackground")
);

function App() {
  const location = useLocation();

  return (
    <div>
      <ContextProviders>
        <Cursor />

        {/* Main app container with full height and flexbox layout */}
        <m.div
          initial={{ filter: "blur(50px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="relative w-full h-screen flex flex-col justify-between items-center bg-with-overlay"
        >
          <AnimatedBackground />

          <Navigation />

          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>

          <Footer />
        </m.div>
      </ContextProviders>
    </div>
  );
}

export default App;
