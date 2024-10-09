// AnimatedBackground.js
import React, { useState, useEffect } from "react";

const AnimatedBackground = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    // Function to toggle the display of the element
    const toggleElement = () => {
      setShowElement(true);

      setTimeout(() => {
        setShowElement(false); // Hide the element after 0.5 seconds
      }, 500);
    };

    const interval = setInterval(toggleElement, 4000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showElement && (
        <>
          {/* Paint Brush Image */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            <div className="w-full h-full bg-paint-brush"></div>
          </div>

          {/* Crown Image */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            <div className="w-full h-full bg-crown"></div>
          </div>
        </>
      )}
    </>
  );
};

export default AnimatedBackground;
