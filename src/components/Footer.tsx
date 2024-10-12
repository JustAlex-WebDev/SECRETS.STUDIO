import React from "react";

/**
 * Displays the website name and copyright notice.
 */
const Footer: React.FC = () => {
  return (
    <footer
      className="w-full max-w-[1024px] flex justify-between items-center p-5 text-xs italic tracking-[1px]"
      role="contentinfo"
    >
      <p aria-label="Website name" tabIndex={0}>
        secrets.studio
      </p>
      <p aria-label="Copyright notice" tabIndex={0}>
        © 2024 - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
