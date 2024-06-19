import "../stylesheets/RecipeOutline3.css";

export function RecipeOutline() {
    return (
        <div className="recipe-outline-container">
            <div className="opening-card-container">
                <div className="left">
                    <p className="recipe-name">Korean Fried Yellow Croaker</p>
                    
                    {/* Tags */}
                    <div className="tags-container">
                        <span className="tag">Quick</span>
                        <span className="tag">Easy</span>
                        <span className="tag">One pan</span>
                        <span className="tag">Korean</span>
                    </div>

                    <div className="recipe-attributes">
                        <ul>
                            <li className="attribute">
                                test
                            </li>
                            <li className="attribute">
                                test
                            </li>
                            <li className="attribute">
                                test
                            </li>
                        </ul>
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