import React from "react";
import { useCursorContext } from "../context/CursorContext";

const Navigation: React.FC = () => {
  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  return (
    <div className="w-full max-w-[1024px] flex justify-between items-center p-5">
      {/* Logo */}
      <div
        onMouseOver={mouseOverEvent}
        onMouseOut={mouseOutEvent}
        className="font-chaney text-base tracking-[1px]"
      >
        SECRETS.
      </div>

      {/* Nav Icon */}
      <div
        onMouseOver={mouseOverEvent}
        onMouseOut={mouseOutEvent}
        className="flex flex-col justify-center items-center gap-1"
      >
        <div className="w-6 h-1 rounded-sm bg-white"></div>
        <div className="w-6 h-1 rounded-sm bg-white"></div>
      </div>
    </div>
  );
};

export default Navigation;
