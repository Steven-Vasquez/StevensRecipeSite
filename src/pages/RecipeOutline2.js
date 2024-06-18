import "../stylesheets/RecipeOutline2.css";

export function RecipeOutline({ recipeName, recipeCredit, recipeCreditLink, descriptionShort, tags, 
    recipeImage, nutritionInfo, dishType, cookTime, servings, allergies, dietType }) {

    return (
        <div className="page-container">

            {/* Recipe Card Opening */}
            <div className="outer-opening-container">
                <div className="opening-card-container">

                    {/* Recipe Name and Tags */}
                    <div className="outer-recipe-name-container">
                        <div className="recipe-name-container">
                            <p className="recipe-name">Fried Rice</p>
                            <p className="recipe-credit">Recipe by: Me</p>
                            <p className="description-short">This is a simple fried rice recipe using easily-accessible supermarket ingredients</p>
                            <div className="tags-container">
                                <span className="tag">Quick</span>
                                <span className="tag">Easy</span>
                                <span className="tag">One pot</span>
                                <span className="tag">Meal Prep</span>
                            </div>
                        </div>
                    </div>

                    {/* Recipe Image */}
                    <div className="outer-recipe-image-container">
                        <div className="recipe-image-container">
                            <img src="/images/recipe_images/fried_rice/fried_rice.jpg" alt="Fried Rice" />
                        </div>
                    </div>


                    {/* Recipe Nutrition Information */}
                    <div className="outer-nutrition-info-container">
                        <div className="nutrition-info-container">
                            nutrition info
                        </div>
                    </div>

                    {/* Recipe Basic Info */}
                    <div className="outer-basic-info-container">
                        <div className="basic-info-container">
                            <div className="recipe-info">
                                <img src="/images/filter_icons/dish_type.png" alt="Dish Type" className="info-icon" />
                                <p>Dish Type</p>
                                <ul>
                                    <li>Lunch Entree</li>
                                    <li>Dinner Entree</li>
                                </ul>
                            </div>

                            <div className="recipe-info">
                                <img src="/images/filter_icons/cook_time.png" alt="Cook Time" className="info-icon" />
                                <p>Cook Time</p>
                                <ul>
                                    <li>30 minutes</li>
                                </ul>
                            </div>

                            <div className="recipe-info">
                                <img src="/images/filter_icons/servings.png" alt="Servings" className="info-icon" />
                                <p>Servings</p>
                                <ul>
                                    <li>4-6</li>
                                </ul>
                            </div>

                            <div className="recipe-info">
                                <img src="/images/filter_icons/allergies.png" alt="Allergies" className="info-icon" />
                                <p>Allergies</p>
                                <ul>
                                    <li>None</li>
                                </ul>
                            </div>

                            <div className="recipe-info">
                                <img src="/images/filter_icons/diet_type.png" alt="Diet Type" className="info-icon" />
                                <p>Diet Type</p>
                                <ul>
                                    <li>None</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RecipeOutline;