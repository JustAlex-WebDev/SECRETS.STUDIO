import React from "react";

// Mobile device detector
import { isMobile } from "react-device-detect";

// Context
import { useCursorContext } from "../context/CursorContext";

// Routing
import { useLocation } from "react-router-dom";

/**
 * Cursor component
 * Displays a custom cursor that changes based on the current route and cursor state.
 *
 * @returns {JSX.Element} A visual custom cursor that follows the mouse.
 */
const Cursor: React.FC = () => {
  // Get the current route location from React Router
  const location = useLocation();

  // Extract custom cursor context values
  const { dot, cursor } = useCursorContext();

  /**
   * Determines the cursor image source based on the current location and cursor state.
   * @returns {string} The file path of the cursor image.
   */
  const getCursorImage = () => {
    if (cursor === "default") {
      return location.pathname === "/work" || location.pathname === "/contact"
        ? "/images/cursorDefaultColored.png"
        : "/images/cursorDefault.png";
    } else {
      return location.pathname === "/work" || location.pathname === "/contact"
        ? "/images/cursorPointerColored.png"
        : "/images/cursorPointer.png";
    }
  };

  return (
    // Custom cursor is hidden for mobile devices
    <div className={`${isMobile ? "hidden" : "block"}`}>
      <img
        ref={dot}
        src={getCursorImage()}
        className="cursor-dot relative z-50"
        alt={`${cursor === "default" ? "Default" : "Pointer"} Cursor`}
      />
    </div>
  );
};

export default Cursor;
