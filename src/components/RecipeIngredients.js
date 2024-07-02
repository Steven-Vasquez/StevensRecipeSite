import "../stylesheets/RecipeIngredients.css";
export function RecipeIngredients({ component_names, ingredients }) {
    return (
        <div className="outer-recipe-container">
            <div className="recipe-ingredients-container">
                <div className="red-title">Ingredients</div>
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
        </div>

    );
}

export default RecipeIngredients;