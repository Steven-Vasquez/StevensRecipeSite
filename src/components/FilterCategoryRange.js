import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import SmoothCollapse from "react-smooth-collapse";
import CollapseIcon from "../images/collapse_icon.png";

import "../stylesheets/SidePanel.css";

export function FilterCategoryRange({ 
    category, // Category of the filter (e.g., cookTime, servings)
    categoryLabel, // Label/name to display on website
    icon, // Icon for the filter category
    onSliderChange, // Function to send updated values to parent component
    min, // Min slider value
    max, // Max slider value
    marks // { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4' }

 }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function toggleFilterCollapse() {
        setIsCollapsed(!isCollapsed);
        console.log("Filter collapsed: " + isCollapsed);
    }

    const [range, setRange] = useState([min, max]); // Default range (0 to 4 hours)

    const handleSliderChange = (newRange) => {
        setRange(newRange);
        console.log("Value of range: " + newRange);
    };

    useEffect(() => {
        onSliderChange(category, range); // Send updated values to parent component when range is updated
    }, [range]); // Runs after range is updated

    return (
        <div className={`filter-category ${isCollapsed ? "not-collapsed" : "collapsed"}`}>
            <div className="filter-header" onClick={toggleFilterCollapse}>

                <div className="filter-flex">
                    {icon && <img src={icon} alt={categoryLabel} className="filter-icon" />}
                    <div className="filter-header-text">{categoryLabel}</div>

                </div>

                <div className="collapse-icon-container">
                    <img
                        className={`collapse-icon ${isCollapsed ? 'collapsed-icon' : 'not-collapsed-icon'}`}
                        src={CollapseIcon}
                        alt="collapse icon"
                    />
                </div>
            </div>
            <SmoothCollapse expanded={isCollapsed}>
                <div className="filter-content slider-content">
                    <Slider
                        range
                        min={min}
                        max={max}
                        defaultValue={[min,max]}
                        step={1}
                        marks={marks}
                        value={range}
                        onChange={handleSliderChange}
                    />
                </div>
            </SmoothCollapse>
        </div>
    );
};

export default FilterCategoryRange;
