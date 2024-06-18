import "../stylesheets/RecipeOutline3.css";

export function RecipeOutline() {
    return (
        <div className="recipe-outline-container">
            <div className="opening-card-container">
                <div className="left">
                    left container
                </div>

                <div className="right">
                    <img src="/images/recipe_images/fried_rice/fried_rice.jpg" alt="Fried Rice" />
                </div>
            </div>
        </div>
    );
}

export default RecipeOutline;