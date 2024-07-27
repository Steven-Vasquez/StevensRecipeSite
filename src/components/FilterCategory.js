import React from "react";

export function FilterCategory({ category, categoryLabel, icon, options, onCheckboxChange }) {

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

    return (
        <div className="filter-category">
            <div className="filter-header" onClick={toggleFilterCategory}>
                
                <div className="filter-header-text">{categoryLabel}</div>
                {icon && <img src={icon} alt={categoryLabel} className="filter-icon" />}
            </div>
            <div className="filter-content">
                {options.map((option, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            value={option}
                            onChange={(event) => onCheckboxChange(event, category)}
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterCategory;
