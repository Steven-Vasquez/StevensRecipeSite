import React, { useState } from "react";
import "../stylesheets/SidePanel.css";

const SidePanel = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        dishType: [],
        cookTime: [],
        servings: [],
        allergies: [],
        dietTypes: [],
        nicheEquipment: []
    });

    const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

    const toggleSidePanel = () => {
        setIsSidePanelOpen(!isSidePanelOpen);
    };



    const handleFilterChange = (category, value) => {
        // Update the filters state
        setFilters(prevFilters => ({
            ...prevFilters,
            [category]: [...prevFilters[category], value]
        }));
    };

    function toggleFilterCategory(event) {
        var header = event.currentTarget;
        var content = header.nextElementSibling;
        if (content) {
            if (content.style.display === "block") {
                content.style.display = "none";
                header.classList.add("collapsed"); // Add the collapsed class
            } else {
                content.style.display = "block";
                header.classList.remove("collapsed"); // Remove the collapsed class
            }
        }
    }

    const handleCheckboxChange = (event, category) => {
        const { checked, value } = event.target;
        if (checked) {
            handleFilterChange(category, value);
        } else {
            // Remove the unchecked value from the filters state
            setFilters(prevFilters => ({
                ...prevFilters,
                [category]: prevFilters[category].filter(item => item !== value)
            }));
        }
    };

    // Pass the filters data to the parent component
    onFilterChange(filters);

    return (
        <div className="side-panel-container">


            <div className={`side-panel ${isSidePanelOpen ? "with-side-panel" : "without-side-panel"}`}>
                <h2>Filters</h2>

                <div className="filter-category">
                    <div className="filter-header" onClick={toggleFilterCategory}>Dish Type</div>
                    <div className="filter-content">
                        <label>
                            <input
                                type="checkbox"
                                value="Breakfast"
                                onChange={(event) => handleCheckboxChange(event, "dishType")}
                            />
                            Breakfast
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Lunch Entree"
                                onChange={(event) => handleCheckboxChange(event, "dishType")}
                            />
                            Lunch Entree
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Dinner Entree"
                                onChange={(event) => handleCheckboxChange(event, "dishType")}
                            />
                            Dinner Entree
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Snack"
                                onChange={(event) => handleCheckboxChange(event, "dishType")}
                            />
                            Snack
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Side Dish"
                                onChange={(event) => handleCheckboxChange(event, "dishType")}
                            />
                            Side Dish
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Party Snack"
                                onChange={(event) => handleCheckboxChange(event, "dishType")}
                            />
                            Party Snack
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Dessert"
                                onChange={(event) => handleCheckboxChange(event, "dishType")}
                            />
                            Dessert
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                value="Veggies"
                                onChange={(event) => handleCheckboxChange(event, "dishType")}
                            />
                            Veggies
                        </label>


                        {/* Add more checkboxes here */}
                    </div>
                </div>

                {/* Toggle Button */}


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
