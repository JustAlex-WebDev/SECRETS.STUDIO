import React from "react";
import { isMobile } from "react-device-detect";
import { useCursorContext } from "../context/CursorContext";
import { useLocation } from "react-router-dom";

const Cursor: React.FC = () => {
  // Get the current location from the router
  const location = useLocation();

  // Custom cursor context
  const { dot, cursor } = useCursorContext();

  // Determine the cursor image based on the current location and cursor type
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
    // Hide cursor for mobile devices
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
