import React, { useState } from 'react';
import SmoothCollapse from 'react-smooth-collapse';
import '../stylesheets/CustomCollapse.css';

const CustomCollapse = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="custom-collapse-container">
            <button onClick={toggleCollapse}>
                {isCollapsed ? 'Expand' : 'Collapse'}
            </button>
            <div className={`collapsible-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                <SmoothCollapse expanded={!isCollapsed}>
                    {children}
                </SmoothCollapse>
            </div>
        </div>
    );
};

export default CustomCollapse;