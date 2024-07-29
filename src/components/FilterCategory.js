import React, { useState } from "react";
import SmoothCollapse from "react-smooth-collapse";
import CollapseIcon from "../images/collapse_icon.png";

import "../stylesheets/SidePanel.css";

export function FilterCategory({ category, categoryLabel, icon, options, onCheckboxChange }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function toggleFilterCollapse() {
        setIsCollapsed(!isCollapsed);
        console.log("Filter collapsed: " + isCollapsed);
    }

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
            </SmoothCollapse>
        </div>
    );
};

export default FilterCategory;
