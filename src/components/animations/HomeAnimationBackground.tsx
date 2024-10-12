import React, { useState, useEffect, useCallback, useRef } from "react";

/**
 * Toggles visibility of background elements (paint brush and crown) at intervals.
 * @returns {JSX.Element} An animated background with timed visibility toggling.
 */
const AnimatedBackground: React.FC = () => {
  const [showElement, setShowElement] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Toggles the visibility of the background elements.
   */
  const toggleElement = useCallback(() => {
    setShowElement(true);

    // Hide the element
    setTimeout(() => setShowElement(false), 500);
  }, []);

  useEffect(() => {
    // Toggle the background elements
    intervalRef.current = setInterval(toggleElement, 4000);

    // Clean up function
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [toggleElement]);

  return (
    <>
      {showElement && (
        <>
          {/* Paint Brush */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            <div className="w-full h-full bg-paint-brush"></div>
          </div>
        </>
      )}

      {/* Crown */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="w-full h-full bg-crown"></div>
      </div>
    </>
  );
};

export default AnimatedBackground;
