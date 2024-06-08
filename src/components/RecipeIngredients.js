export function RecipeIngredients({ component_name, ingredients}) {
    return (
        <div className="recipe-ingredients-container">
            <h3>Ingredients for {component_name}</h3>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ol>
        </div>
    );
}

export default RecipeIngredients;