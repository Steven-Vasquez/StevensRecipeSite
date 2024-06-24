import "../stylesheets/RecipeOutline3.css";

export function RecipeOutline() {
    return (
        <div className="recipe-outline-container">
            <div className="opening-card-container">
                <div className="left">
                    <p className="recipe-name">Korean Fried Yellow Croaker</p>
                    {/* Star Rating */}
                    <div className="star-rating">
                        <span>Steven's Rating: </span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>

                    </div>


                    {/* Tags */}
                    <div className="tags-container">
                        <span className="tag">Quick</span>
                        <span className="tag">Easy</span>
                        <span className="tag">One pan</span>
                        <span className="tag">Korean</span>
                    </div>

                    {/* Recipe Attributes */}
                    <div className="recipe-attributes">
                        <div className="attribute">
                            <span>Prep</span>
                            <span>
                                <span>30</span>
                                <span>Min</span>
                            </span>
                        </div>
                        <div className="attribute">
                            <span>Total</span>
                            <span>
                                <span>6</span>
                                <span>Hr</span>
                                <span>10</span>
                                <span>Min</span>
                            </span>
                        </div>
                        <div className="attribute">
                            <span>Servings</span>
                            <span>
                                <span>30</span>
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