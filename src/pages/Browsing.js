// Browsing.js
import React, { useState } from "react";
import "../stylesheets/Browsing.css";
import "../stylesheets/SidePanel.css";
import SidePanel from "../components/SidePanel";

const Browsing = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="page-container">
      {/* Side Panel for Filters */}
      <SidePanel onFilterChange={() => {}} />
      {/* Toggle Button */}
      

      {/* Main Content (Recipe List) */}
      <div className="main-content">
        <h1>Recipe browsing page with side panel of filters</h1>
      </div>
    </div>
  );
};

export default Browsing;
