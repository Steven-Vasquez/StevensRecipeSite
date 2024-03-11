// Browsing.js
import React, { useState } from "react";
import "../stylesheets/Browsing.css";

const Browsing = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className={`page-container ${isSidePanelOpen ? "with-side-panel" : "without-side-panel"}`}>
      {/* Side Panel for Filters */}
      <div className="side-panel">
        <h2>Filters</h2>
        {/* Add filter options here */}
      </div>

      {/* Toggle Button */}
      <div className="toggle-container">
        <button className={`toggle-button `} onClick={toggleSidePanel}>
          {isSidePanelOpen ? ">" : "<"}
        </button>
      </div>

      {/* Main Content (Recipe List) */}
      <div className="main-content">
        <h1>Recipe browsing page with side panel of filters</h1>
      </div>
    </div>
  );
};

export default Browsing;
