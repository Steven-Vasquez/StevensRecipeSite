import React from "react";
import { useState, useRef, useEffect } from "react";
import SmoothCollapse from "react-smooth-collapse";

import "../stylesheets/RecipeTemplate.css";
import CollapseIcon from "../images/collapse_icon.png";

export function RecipeTemplate({ component_names, ingredients, step_titles, steps }) {
    const [isIngredientsCollapsed, setIsIngredientsCollapsed] = useState(false);
    const [isStepsCollapsed, setIsStepsCollapsed] = useState(false);

    const ingredientsHeaderRef = useRef(null);
    const stepsHeaderRef = useRef(null);
    const redLineRef1 = useRef(null);
    const redLineRef2 = useRef(null);

    // UseEffect to set the width of the red line to match the width of the section header
    useEffect(() => {
        if (ingredientsHeaderRef.current && redLineRef1.current) {
            const sectionHeaderWidth = ingredientsHeaderRef.current.offsetWidth;
            redLineRef1.current.style.width = `${sectionHeaderWidth}px`;
        } else {
            console.log("ingredientsHeaderRef or redLine1Ref not found");
        }

        if (stepsHeaderRef.current && redLineRef2.current) {
            const sectionHeaderWidth = stepsHeaderRef.current.offsetWidth;
            redLineRef2.current.style.width = `${sectionHeaderWidth}px`;
        } else {
            console.log("stepsHeaderRef or redLine2Ref not found");
        }

    }, []);

    // Functions to toggle the collapse of the ingredients and steps sections
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

                <div className="section-header" onClick={toggleIngredientsCollapse} ref={ingredientsHeaderRef}>
                    <span className="red-title">Ingredients</span>
                    <img
                        className={`collapse-icon ${isIngredientsCollapsed ? 'collapsed-icon' : 'not-collapsed-icon'}`}
                        src={CollapseIcon}
                        alt="collapse icon"
                    />
                </div>
                <div className="red-line" ref={redLineRef1}></div>

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
                <div className="section-header" onClick={toggleStepsCollapse} ref={stepsHeaderRef}>
                    <span className="red-title">Steps</span>
                    <img
                        className={`collapse-icon ${isStepsCollapsed ? 'collapsed-icon' : 'not-collapsed-icon'}`}
                        src={CollapseIcon}
                        alt="collapse icon"
                    />
                </div>
                <div className="red-line" ref={redLineRef2}></div>
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