// Browsing.js
import React, { useState, useEffect } from "react";

import "../stylesheets/Browsing.css";
import "../stylesheets/SidePanel.css";

import SidePanel from "../components/SidePanel";
import BrowsingPreview from "../components/BrowsingPreview";
import SearchIcon from "../images/search_icon_white.png"

const Browsing = () => {
  const [activeFilters, setActiveFilters] = useState({
    allergies: [],
    cookTimeMin: 0,
    cookTimeMax: 4,
    countryOfOrigin: [],
    dietType: [],
    dishType: [],
    equipment: [],
    mealType: [],
    notableChefs: [],
    proteinType: [],
    servings: [],
  });

  // Stores: recipe_id, recipe_name, star_rating, recipe_image_url, work_in_progress
  const [recipes, setRecipes] = useState([]); // State to store basic recipe data

  // Fetch recipe data from the backend
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Check if all filters are empty
        const areFiltersEmpty = Object.entries(activeFilters).every(([key, filter]) => {
          if (Array.isArray(filter)) {
            // For array filters, check if the length is zero
            return filter.length === 0;
          } else if (typeof filter === 'number') {
            // For numeric filters like cookTime, check if their values are the default (0 for min, 4 for max)
            if (key === "cookTimeMin") {
              return filter === 0;
            } else if (key === "cookTimeMax") {
              return filter === 4;
            }
            // For other numeric filters, just check if the value is zero or any other default
            return filter === 0;
          }
          // For other cases (like strings or objects), treat empty values as falsy
          return !filter;
        });


        // Build the URL
        const url = areFiltersEmpty
          ? "http://localhost:3001/api/recipes/basic-info" // Fetch all recipes
          : `http://localhost:3001/api/recipes/basic-info?${new URLSearchParams(activeFilters).toString()}`;

        console.log("Fetching recipes from URL:", url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [activeFilters]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  } // Empty dependency array ensures this runs only once on mount

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
          <div className="search-container">
            <input type="text" placeholder="Search Recipes" className="search-input" />
            <button className="search-button-container">
              <img src={SearchIcon} alt="Search" className="search-icon" />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="search-results-container">
          {recipes.map((recipe) => (
            <BrowsingPreview
              key={recipe.recipe_id}
              recipeName={recipe.recipe_name}
              recipeSlug={recipe.recipe_slug}
              rating={recipe.star_rating}
              imageUrl={recipe.recipe_image_url}
              isWorkInProgress={recipe.work_in_progress}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Browsing;
