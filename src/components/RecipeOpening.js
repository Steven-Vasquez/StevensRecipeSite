import StarRating from "./StarRating";
import "../stylesheets/RecipeOpening.css";

export function RecipeOutline({
    recipeName,        // The name of the recipe
    starRating,        // The star rating of the recipe
    recipeCredit,      // The credit for the recipe
    descriptionShort,  // A short description of the recipe
    tags = [],         // An array of tags related to the recipe, with a default empty array
    recipeImage,       // The URL of the recipe image
    prepTime,          // Preparation time for the recipe
    totalTime,         // Total time for the recipe
    servings           // Number of servings the recipe makes
}) {
    return (
        <div className="recipe-outline-container">
            <div className="opening-card-container">
                <div className="left">
                    <div className="recipe-name-container">
                        <p className="recipe-name patua-font">{recipeName}</p>
                        {/* Star Rating */}
                        <StarRating rating={starRating} />

                        {/* Tags */}
                        <div className="tags-container">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                        <span className="credit">Credit: {recipeCredit}</span>
                    </div>





                    {/* Recipe Attributes */}
                    <div className="recipe-attributes">
                        <div className="attribute">
                            <span className="red-info-title">Prep</span>
                            <span>
                                <span className="lexend-font big-number">30</span>
                                <span className="lexend-font small-label"> Min</span>
                            </span>
                        </div>
                        <div className="attribute">
                            <span className="red-info-title">Total</span>
                            <span>
                                <span className="lexend-font big-number">6</span>
                                <span className="lexend-font small-label"> Hr </span>
                                <span className="lexend-font big-number">10</span>
                                <span className="lexend-font small-label"> Min</span>
                            </span>
                        </div>
                        <div className="attribute">
                            <span className="red-info-title">Servings</span>
                            <span>
                                <span className="lexend-font big-number">30</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <img src={recipeImage} alt={recipeName} />
                </div>
            </div>
        </div>
    );
}

export default RecipeOutline;