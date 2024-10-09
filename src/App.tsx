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
const AnimatedBackground = React.lazy(
  () => import("./components/animations/HomeAnimationBackground")
);

/**
 * Main application component.
 * @returns {JSX.Element} The main structure of the application.
 */
const App: React.FC = () => (
  <div>
    {/* Wrapping the app in necessary providers */}
    <ContextProviders>
      {/* Custom cursor component */}
      <Cursor />

      {/* Main app container with background animation */}
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
        {/* Animated background component (lazy-loaded for performance) */}
        <AnimatedBackground />

        {/* Navigation bar for main site navigation */}
        <Navigation />

        {/* App's dynamic routing, with animated page transitions */}
        <AppRoutes />

        {/* Footer at the bottom of the page */}
        <Footer />
      </m.div>
    </ContextProviders>
  </div>
);

export default App;
