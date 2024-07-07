import React from "react";
import { useState } from "react";
import SmoothCollapse from "react-smooth-collapse";

import "../stylesheets/RecipeTemplate.css";
import CollapseIcon from "../images/collapse_icon.png";

export function RecipeTemplate({ component_names, ingredients, step_titles, steps }) {
    const [isIngredientsCollapsed, setIsIngredientsCollapsed] = useState(false);
    const [isStepsCollapsed, setIsStepsCollapsed] = useState(false);

    const toggleIngredientsCollapse = () => {
        setIsIngredientsCollapsed(!isIngredientsCollapsed);
        console.log("Ingredients collapsed: " + isIngredientsCollapsed);
    };

    const toggleStepsCollapse = () => {
        setIsStepsCollapsed(!isStepsCollapsed);
    };

    return (
        <div className="outer-recipe-container">
            <div className="recipe-ingredients-container">
                {/* RECEIPE INGREDIENTS */}

                <div className="section-header" onClick={toggleIngredientsCollapse}>
                    <span className="red-title">Ingredients</span>
                    <img
                        className={`collapse-icon ${isIngredientsCollapsed ? 'collapsed-icon' : 'not-collapsed-icon'}`}
                        src={CollapseIcon}
                        alt="collapse icon"
                    />
                </div>
                <div className="red-line"></div>

                <SmoothCollapse expanded={!isIngredientsCollapsed}>
                    <div className="steps-container">
                        {component_names.map((component_name, index) => (
                            <div key={index} className="recipe-component">
                                <div className="recipe-component-name">{component_name}</div>
                                <ul className="ingredient-list">
                                    {ingredients[index].map((ingredient, idx) => (
                                        <li key={idx} className="ingredient-container">
                                            <span className="recipe-measurement">{ingredient[0]}</span>
                                            <span className="recipe-ingredients">{ingredient[1]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                        ))}
                    </div>
                </SmoothCollapse>

                {/* RECEIPE STEPS */}
                <div className="section-header" onClick={toggleStepsCollapse}>
                    <span className="red-title">Steps</span>
                    <img
                        className={`collapse-icon ${isStepsCollapsed ? 'collapsed-icon' : 'not-collapsed-icon'}`}
                        src={CollapseIcon}
                        alt="collapse icon"
                    />
                </div>
                <div className="red-line"></div>
                <SmoothCollapse expanded={!isStepsCollapsed}>
                    <div className="steps-container">
                        {step_titles.map((step_title, index) => (
                            <div key={index} className="recipe-component">
                                <div className="recipe-component-name">{step_title}</div>

                                <ul className="step-list">
                                    {steps[index].map((step, idx) => (
                                        <li key={idx} className="step-container">
                                            <span className="step-number">{idx + 1}</span>
                                            <span className="step-content">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </SmoothCollapse>
            </div>

        </div>

    );
}

export default RecipeTemplate;