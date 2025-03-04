import React, { useState, useEffect } from "react";
import "../stylesheets/SidePanel.css";

import FilterCategory from "./FilterCategory";
import CollapseIcon from "../images/collapse_icon.png";

const SidePanel = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        allergies: [],
        cookTime: [],
        countryOfOrigin: [],
        dietType: [],
        dishType: [],
        equipment: [],
        mealType: [],
        notableChefs: [],
        proteinType: [],
        servings: [],
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
                                "<1 hour", "2-3 hours", "4+ hours"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        {/* Country of Origin Filter */}
                        {/*https://www.freepik.com/icon/planet-earth_921490#fromView=search&page=1&position=0&uuid=fbfbedaf-a447-408d-a3df-d6f79f531bfa*/}
                        <FilterCategory
                            category="countryOfOrigin"
                            categoryLabel="Country Origin"
                            icon="/images/filter_icons/country_of_origin.png"
                            options={[
                                "America", "India", "Unknown"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />


                        {/* Diet Types Filter */}
                        <FilterCategory
                            category="dietType"
                            categoryLabel="Diet Type"
                            icon="/images/filter_icons/diet_type.png"
                            options={[
                                "Bulk", "Cut", "Vegan", "Vegetarian"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        {/* Dish Type Filter */}
                        {/*https://www.freepik.com/icon/portion_10008895#fromView=search&page=1&position=1&uuid=8529b7c9-409a-4d01-afa6-19afcedc57fb*/}
                        <FilterCategory
                            category="dishType"
                            categoryLabel="Dish Type"
                            icon="/images/filter_icons/dish_type.png"
                            options={[
                                "Pasta", "Salad", "Soup/Stew", "Veggetable Dish"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        {/* Special Equipment Filter */}
                        <FilterCategory
                            category="equipment"
                            categoryLabel="Equipment"
                            icon="/images/filter_icons/equipment_needed.png"
                            options={[
                                "Air Fryer", "Blender", "Food Processor", "Instant Pot", "Slow Cooker"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />


                        {/* Meal Type Filter */}
                        <FilterCategory
                            category="mealType"
                            categoryLabel="Meal Type"
                            icon="/images/filter_icons/meal_type.png"
                            options={[
                                "Breakfast", "Lunch", "Dinner/Main Course", "Dessert", "Side Dish", "Snack"
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
                                "Beef", "Chicken", "Cottage Cheese", "Fish", "Pork", "Shrimp", "Tofu", "Turkey"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        {/* Servings Filter */}
                        <FilterCategory
                            category="servings"
                            categoryLabel="Servings"
                            icon="/images/filter_icons/servings.png"
                            options={[
                                "1-2", "3-4", "5+"
                            ]}
                            onCheckboxChange={handleCheckboxChange}
                        />

                        {/* Etc Properteis Filter */}
                        <FilterCategory
                            category="etcProperties"
                            categoryLabel="COMING SOON"
                            icon="/images/filter_icons/etc_properties.png"
                            options={[
                                "Meal prep", "Freezable", "Cost Effective", "Sauces"
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
