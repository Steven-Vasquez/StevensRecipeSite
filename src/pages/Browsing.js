// Browsing.js
import React, { useState } from "react";

import "../stylesheets/Browsing.css";
import "../stylesheets/SidePanel.css";

import SidePanel from "../components/SidePanel";
import BrowsingPreview from "../components/BrowsingPreview";
import SearchIcon from "../images/search_icon_white.png"

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
        <div className="filter-settings">
          <div class="search-container">
            <input type="text" placeholder="Search Recipes" class="search-input" />
            <button class="search-button-container">
              <img src={SearchIcon} alt="Search" className="search-icon"/>
            </button>
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
