// Browsing.js
import React, { useState } from "react";

import "../stylesheets/Browsing.css";
import "../stylesheets/SidePanel.css";

import SidePanel from "../components/SidePanel";
import BrowsingPreview from "../components/BrowsingPreview";


const Browsing = () => {
  const [activeFilters, setActiveFilters] = useState({
    dishType: [],
    cookTime: [],
    servings: [],
    allergies: [],
    dietTypes: [],
    nicheEquipment: []
  });

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
    console.log(activeFilters)
  };

  return (
    <div className="browsing-page-container">
      {/* Side Panel for Filters */}
      <SidePanel onFilterChange={handleFilterChange} />
      {/* Toggle Button */}


      {/* Main Content (Recipe List) */}
      <div className="main-content">
        <h1>Recipe browsing page with side panel of filters</h1>
        <div className="search-results-container">
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />

        </div>
      </div>
    </div>
  );
};

export default Browsing;
