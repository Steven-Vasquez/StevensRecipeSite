// Browsing.js
import React, { useState } from "react";

import "../stylesheets/Browsing.css";
import "../stylesheets/SidePanel.css";

import SidePanel from "../components/SidePanel";
import BrowsingPreview from "../components/BrowsingPreview";
import SearchIcon from "../images/search_icon.png"

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
        
        {/* Search Bar */}
        <div className="filter-settings-container">
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input" />
            <div className="search-icon-container">
              <img
                className="search-icon"
                src={SearchIcon}
                alt="search icon"
              />
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="search-results-container">
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
          <BrowsingPreview />
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
