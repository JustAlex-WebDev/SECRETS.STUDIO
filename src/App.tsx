import React from "react";

// Context and Providers
import { ContextProviders } from "./context/ContextProviders";

// Components
import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Animation Libraries
import { motion as m } from "framer-motion";

// Routing
import AppRoutes from "./routes/AppRoutes";

// Lazy-loaded components
const HomeAnimationBackground = React.lazy(
  () => import("./components/animations/HomeAnimationBackground")
);

/**
 * Main application component.
 * @returns {JSX.Element} The main structure of the application.
 */
const App: React.FC = () => (
  <ContextProviders>
    {/* Custom cursor */}
    <Cursor />

    {/* Main app container */}
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
      {/* Animated background component */}
      <HomeAnimationBackground />

      {/* Main navigation */}
      <Navigation />

      {/* Routing */}
      <AppRoutes />

      {/* Footer */}
      <Footer />
    </m.div>
  </ContextProviders>
);

export default App;
