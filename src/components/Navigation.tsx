import React from "react";
import { useCursorContext } from "../context/CursorContext";

/**
 * Displays the website logo and a navigation menu icon.
 */
const Navigation: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <nav className="w-full h-auto max-w-[1024px] flex justify-between items-center p-5 z-20">
      {/* Logo Section */}
      <h1
        onMouseOver={mouseOverEvent}
        onMouseOut={mouseOutEvent}
        className="font-chaney text-base tracking-[1px]"
        aria-label="Website logo"
        tabIndex={0}
      >
        SECRETS.
      </h1>

      {/* Navigation Menu Icon */}
      <button
        onMouseOver={mouseOverEvent}
        onMouseOut={mouseOutEvent}
        className="h-full flex flex-col justify-center items-center gap-1 cursor-none"
        aria-label="Navigation menu"
        tabIndex={0}
      >
        <span className="w-6 h-1 rounded-sm bg-white"></span>
        <span className="w-6 h-1 rounded-sm bg-white"></span>
      </button>
    </nav>
  );
};

export default Navigation;
