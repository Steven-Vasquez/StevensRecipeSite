import StarRating from "./StarRating";
import "../stylesheets/RecipeOpening.css";

// Utility function to format time in hours and minutes
const formatTime = (minutes) => {
    if (!minutes || isNaN(minutes)) return null;
    
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return {
        hours: hours > 0 ? hours : null,
        minutes: mins > 0 ? mins : null
    };
};

export function RecipeOpening({
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
    // Format prep and total time
    const formattedPrepTime = formatTime(prepTime);
    const formattedTotalTime = formatTime(totalTime);

    // Helper function to render time in your desired format
    const renderTime = (time) => {
        if (!time) return <span className="lexend-font">N/A</span>;

        return (
            <span>
                {time.hours !== null && (
                    <>
                        <span className="lexend-font big-number">{time.hours}</span>
                        <span className="lexend-font small-label"> Hr </span>
                    </>
                )}
                {time.minutes !== null && (
                    <>
                        <span className="lexend-font big-number">{time.minutes}</span>
                        <span className="lexend-font small-label"> Min</span>
                    </>
                )}
            </span>
        );
    };

    return (
        <div>
            <div className="recipe-outline-container">
                <div className="opening-card-container">
                    <div className="left">
                        <div className="recipe-name-container">
                            <p className="recipe-name patua-font">{recipeName}</p>
                            <div className="star-container">
                                <StarRating rating={starRating} />
                            </div>
                            <div className="tags-container">
                                {tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="recipe-attributes">
                            <div className="attribute">
                                <span className="red-info-title">Prep</span>
                                {renderTime(formattedPrepTime)}
                            </div>
                            <div className="attribute">
                                <span className="red-info-title">Total</span>
                                {renderTime(formattedTotalTime)}
                            </div>
                            <div className="attribute">
                                <span className="red-info-title">Servings</span>
                                <span className="lexend-font big-number">{servings || 'N/A'}</span>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        {recipeImage ? (
                            <img src={recipeImage} alt={recipeName} className="recipe-hero-image" />
                        ) : (
                            <div className="image-placeholder">No Image Available</div>
                        )}
                    </div>
                </div>
            </div>
            {recipeCredit && (
                <span className="credit">Recipe by: {recipeCredit}</span>
            )}
        </div>
    );
}

export default RecipeOpening;