import React, { useState, useEffect } from "react";
import "../stylesheets/SidePanel.css";

import FilterCategory from "./FilterCategory";

const SidePanel = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        dishType: [],
        cookTime: [],
        servings: [],
        allergies: [],
        dietType: [],
        nicheEquipment: []
    });

    const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

    const toggleSidePanel = () => {
        setIsSidePanelOpen(!isSidePanelOpen);
    };


    const handleCheckboxChange = (event, category) => {
        console.log("Filter being changed:" + category + " " + event.target.value)
        const { checked, value } = event.target;
        if (checked) {
            // Update the filters state
            setFilters(prevFilters => ({
                ...prevFilters,
                [category]: [...(prevFilters[category] || []), value] // Ensure prevFilters[category] is an array
            }));
        } else {
            // Remove the unchecked value from the filters state
            setFilters(prevFilters => ({
                ...prevFilters,
                [category]: prevFilters[category].filter(item => item !== value)
            }));
        }
    };


    useEffect(() => {
        // Pass the filters data to the parent component after state update
        onFilterChange(filters);
    }, [filters, onFilterChange]);

    return (
        <div className="side-panel-container">
            <div className={`side-panel ${isSidePanelOpen ? "with-side-panel" : "without-side-panel"}`}>
                <h2>Filters</h2>

                {/* Dish Type Filter */}
                <FilterCategory
                    category="dishType"
                    categoryLabel="Dish Type"
                    icon="/images/filter_icons/dish_type.png"
                    options={[
                        "Breakfast", "Lunch Entree", "Dinner Entree",
                        "Snack", "Side Dish", "Party Snack", "Dessert", "Veggies"
                    ]}
                    onCheckboxChange={handleCheckboxChange}
                />

                {/* Cook Time Filter */}
                <FilterCategory
                    category="cookTime"
                    categoryLabel="Cook Time"
                    icon="/images/filter_icons/cook_time.png"
                    options={[
                        "Under 30 minutes", "30-60 minutes", "1-2 hours", "2+ hours"
                    ]}
                    onCheckboxChange={handleCheckboxChange}
                />

                {/* Servings Filter */}
                <FilterCategory
                    category="servings"
                    categoryLabel="Servings"
                    icon="/images/filter_icons/servings.png"
                    options={[
                        "1-2", "2-4", "4-6", "6+"
                    ]}
                    onCheckboxChange={handleCheckboxChange}
                />

                {/* Allergies Filter */}
                <FilterCategory
                    category="allergies"
                    categoryLabel="Allergies"
                    icon="/images/filter_icons/allergies.png"
                    options={[
                        "Dairy", "Gluten", "Nuts", "Shellfish", "Soy", "Wheat"
                    ]}
                    onCheckboxChange={handleCheckboxChange}
                />

                {/* Diet Types Filter */}
                <FilterCategory
                    category="dietType"
                    categoryLabel="Diet Type"
                    icon="/images/filter_icons/diet_type.png"
                    options={[
                        "Keto", "Paleo", "Vegan", "Vegetarian"
                    ]}
                    onCheckboxChange={handleCheckboxChange}
                />

                {/* Add more filter categories here */}
            </div>
            <div className="toggle-container">
                <button className={`toggle-button `} onClick={toggleSidePanel}>
                    {isSidePanelOpen ? ">" : "<"}
                </button>
            </div>
        </div>
    );
};

export default SidePanel;
