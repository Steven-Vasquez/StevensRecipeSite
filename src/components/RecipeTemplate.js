import "../stylesheets/RecipeTemplate.css";
export function Recipe({ component_names, ingredients, step_titles, steps }) {
    return (
        <div className="outer-recipe-container">
            <div className="recipe-ingredients-container">
                {/* RECEIPE INGREDIENTS */}
                <div className="red-title">Ingredients (minimize button)</div>
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

                {/* RECEIPE STEPS */}
                <div className="red-title">Steps</div>
                {step_titles.map((step_title, index) => (
                    <div key={index} className="recipe-component">
                        <div className="recipe-component-name">{step_title}</div>

                        <ul className="step-list">
                            {steps[index].map((step, idx) => (
                                <li key={idx} className="step-container">
                                    <span className="step-number">{idx+1}</span>
                                    <span className="step-content">{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Recipe;