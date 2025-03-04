import React from "react";
import { useState, useRef, useEffect } from "react";
import SmoothCollapse from "react-smooth-collapse";

import "../stylesheets/RecipeTemplate.css";
import CollapseIcon from "../images/collapse_icon.png";

export function RecipeTemplate({ component_names, ingredients, step_titles, steps, recipe_notes }) {
    const [isIngredientsCollapsed, setIsIngredientsCollapsed] = useState(false);
    const [isStepsCollapsed, setIsStepsCollapsed] = useState(false);
    const [isNotesCollapsed, setIsNotesCollapsed] = useState(false);

    const [checkedIngredients, setCheckedIngredients] = useState({});

    const ingredientsHeaderRef = useRef(null);
    const stepsHeaderRef = useRef(null);
    const notesHeaderRef = useRef(null);
    const redLineRef1 = useRef(null);
    const redLineRef2 = useRef(null);
    const redLineRef3 = useRef(null);

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

        if (notesHeaderRef.current && redLineRef3.current) {
            const sectionHeaderWidth = notesHeaderRef.current.offsetWidth;
            redLineRef3.current.style.width = `${sectionHeaderWidth}px`;
        } else {
            console.log("notesHeaderRef or redLine3Ref not found");
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

    const toggleNotesCollapse = () => {
        setIsNotesCollapsed(!isNotesCollapsed);
    };

    // Function to handle checkbox toggle
    const handleCheckboxToggle = (componentIndex, ingredientIndex) => {
        setCheckedIngredients(prevState => {
            const key = `${componentIndex}-${ingredientIndex}`;
            return {
                ...prevState,
                [key]: !prevState[key]
            };
        });
    };

    return (
        <div className="outer-recipe-container">
            <div className="recipe-ingredients-container">
                {/* RECEIPE INGREDIENTS */}

                <div className="section-header" onClick={toggleIngredientsCollapse} ref={ingredientsHeaderRef}>
                    <span className="red-title">Ingredients</span>
                    <img
                        className={`collapse-icon-recipe ${isIngredientsCollapsed ? 'collapsed-icon-recipe' : 'not-collapsed-icon-recipe'}`}
                        src={CollapseIcon}
                        alt="collapse icon"
                    />
                </div>
                <div className="red-line" ref={redLineRef1}></div>

                <SmoothCollapse expanded={!isIngredientsCollapsed}>
                    <div className="steps-container">
                        {component_names.map((component_name, componentIndex) => (
                            <div key={componentIndex} className="recipe-component">
                                <div className="recipe-component-name">{component_name}</div>
                                <ul className="ingredient-list">
                                    {ingredients[componentIndex].map((ingredient, ingredientIndex) => {
                                        const key = `${componentIndex}-${ingredientIndex}`;
                                        const isChecked = checkedIngredients[key] || false;
                                        return (
                                            <li key={ingredientIndex} className="ingredient-container">
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={() => handleCheckboxToggle(componentIndex, ingredientIndex)}
                                                />
                                                <span className={`recipe-measurement ${isChecked ? 'strikethrough' : ''}`}>{ingredient[0]}</span>
                                                <span className={`recipe-ingredients ${isChecked ? 'strikethrough' : ''}`}>
                                                    {ingredient[1]} <span className={`recipe-ingredients-notes ${isChecked ? 'strikethrough' : ''}`}>{ingredient[2]}</span>
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                        ))}
                    </div>
                </SmoothCollapse>

                {/* RECEIPE STEPS */}
                <div className="section-header" onClick={toggleStepsCollapse} ref={stepsHeaderRef}>
                    <span className="red-title">Steps</span>
                    <img
                        className={`collapse-icon-recipe ${isStepsCollapsed ? 'collapsed-icon-recipe' : 'not-collapsed-icon-recipe'}`}
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
                                            <span className="step-content">{step[0]} <span className="recipe-step-notes">{step[1]}</span></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </SmoothCollapse>

                {/* RECEIPE NOTES */}
                {recipe_notes && recipe_notes.length > 0 && (
                    <>
                        <div className="section-header" onClick={toggleNotesCollapse} ref={notesHeaderRef}>
                            <span className="red-title">Notes</span>
                            <img
                                className={`collapse-icon-recipe ${isNotesCollapsed ? 'collapsed-icon-recipe' : 'not-collapsed-icon-recipe'}`}
                                src={CollapseIcon}
                                alt="collapse icon"
                            />
                        </div>
                        <div className="red-line" ref={redLineRef3}></div>
                        <SmoothCollapse expanded={!isNotesCollapsed}>
                            <div className="notes-container">
                                <ul className="notes-list">
                                    {recipe_notes.map((note, index) => (
                                        <li key={index} className="note-container">
                                            {note}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SmoothCollapse>
                    </>
                )}
            </div>

        </div>

    );
}

export default RecipeTemplate;