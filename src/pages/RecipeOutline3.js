import "../stylesheets/RecipeOutline3.css";

export function RecipeOutline() {
    return (
        <div className="recipe-outline-container">
            <div className="opening-card-container">
                <div className="left">
                    <div className="recipe-name-container">
                        <p className="recipe-name patua-font">Korean Fried Yellow Croaker</p>
                        {/* Star Rating */}
                        <div className="star-rating">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="lexend-font stevens-rating">(Steven's Rating) </span>
                        </div>

                        {/* Tags */}
                        <div className="tags-container">
                            <span className="tag">Quick</span>
                            <span className="tag">Easy</span>
                            <span className="tag">One pan</span>
                            <span className="tag">Korean</span>
                        </div>
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
                    <img src="/images/recipe_images/fried_rice/fried_rice.jpg" alt="Fried Rice" />
                </div>
            </div>
        </div>
    );
}

export default RecipeOutline;