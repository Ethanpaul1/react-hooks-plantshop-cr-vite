import React from "react";

/**
 * Header Component - Displays the application title and branding
 * 
 * Presents the Plantsy brand name with a plant emoji logo.
 * This is a presentational component with no state or interaction.
 */
function Header() {
  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
    </header>
  );
}

export default Header;
