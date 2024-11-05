import React, { useState, useEffect } from "react";
import "../stylesheets/SidePanel.css";

import FilterCategory from "./FilterCategory";
import CollapseIcon from "../images/collapse_icon.png";

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
                <p className={`filter-title ${isSidePanelOpen ? "text-appear" : "text-disappear"}`}>Filters</p>

                <div className={`outer-filter-categories ${isSidePanelOpen ? "with-border" : "no-border"}`}>
                    <div className="outer-button-container">
                        <div className="buttons-container">
                            <button className={`reset-button ${isSidePanelOpen ? "text-appear" : "text-disappear"}`}>Clear all</button>
                            <button className={`apply-button ${isSidePanelOpen ? "text-appear" : "text-disappear"}`}>Apply</button>
                        </div>
                    </div>
                    <div className="filter-categories">
                        {/* Allergies Filter */}
                        <FilterCategory
                            category="allergies"
                            categoryLabel="Allergies"
                            icon="/images/filter_icons/allergies.png"
                            options={[
                                "Dairy", "Nuts", "Shellfish"
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

                        {/* Diet Types Filter */}
                        <FilterCategory
                            category="dietType"
                            categoryLabel="Diet Type"
                            icon="/images/filter_icons/diet_type.png"
                            options={[
                                "Vegan", "Vegetarian", "Bulk", "Cut"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        {/* Dish Type Filter */}
                        <FilterCategory
                            category="dishType"
                            categoryLabel="Dish Type"
                            icon="/images/filter_icons/dish_type.png"
                            options={[
                                "Breakfast", "Main Course", "Side Dish", "Dessert", "Snack", "Party Snack", "Veggies", "Soup & Stew", "Pasta", "Salad"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        {/* Special Equipment Filter */}
                        <FilterCategory
                            category="specialEquipment"
                            categoryLabel="Equipment"
                            icon="/images/filter_icons/equipment_needed.png"
                            options={[
                                "Blender", "Food Processor", "Instant Pot", "Air Fryer", "Slow Cooker"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        {/* Notable Chefs Filter */}
                        <FilterCategory
                            category="notableChefs"
                            categoryLabel="Notable Chefs"
                            icon="/images/filter_icons/chef.png"
                            options={[
                                "Gordon Ramsay", "Joshua Weissman", "Steven"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        {/* Protein Type Filter */}
                        <FilterCategory
                            category="proteinType"
                            categoryLabel="Protein Type"
                            icon="/images/filter_icons/meat.png"
                            options={[
                                "Chicken", "Beef", "Pork", "Fish", "Shellfish", "Turkey", "Tofu"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        {/* Servings Filter */}
                        <FilterCategory
                            category="servings"
                            categoryLabel="Servings"
                            icon="/images/filter_icons/servings.png"
                            options={[
                                "1-2", "3-4", "4-6", "6+"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        {/* Add more filter categories here */}
                    </div>
                </div>
            </div>

            <div className="toggle-container">
                <div className="toggle-button" onClick={toggleSidePanel}>
                    <img
                        className={`collapse-icon2 ${isSidePanelOpen ? 'collapsed-icon2' : 'not-collapsed-icon2'}`}
                        src={CollapseIcon}
                        alt="collapse icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default SidePanel;
