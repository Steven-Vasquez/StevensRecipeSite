import "../stylesheets/RecipeOutline.css";

export function RecipeOutline() {

  return (
    <div className="page-container">

      {/* Recipe Card Opening */}
      <div className="outer-opening-container">
        <div className="opening-card-container">

          <div className="recipe-name-container">
            <p className="recipe-name">Fried Rice</p>
            <p className="recipe-credit">Recipe by: Me</p>
            <div className="tags-container">
              <span className="tag">Quick</span>
              <span className="tag">Easy</span>
              <span className="tag">One pot</span>
              <span className="tag">Meal Prep</span>
            </div>
            <p className="description-short">This is a simple fried rice recipe using easily-accessible supermarket ingredients</p>
          </div>



          <div className="recipe-image-container">
            <img src="/images/recipe_images/fried_rice/fried_rice.jpg" alt="Fried Rice" />
          </div>
        </div>
      </div>

      {/* Recipe Information */}
      <div className="outer-info-container">
        <div className="basic-info-container">
          <div className="recipe-info">
            <img src="/images/filter_icons/dish_type.png" alt="Dish Type" className="filter-icon" />
            <p>Dish Type</p>
            <ul>
              <li>Lunch Entree</li>
              <li>Dinner Entree</li>
            </ul>
          </div>

          <div className="recipe-info">
            <img src="/images/filter_icons/cook_time.png" alt="Cook Time" className="filter-icon" />
            <p>Cook Time</p>
            <ul>
              <li>30 minutes</li>
            </ul>
          </div>

          <div className="recipe-info">
            <img src="/images/filter_icons/servings.png" alt="Servings" className="filter-icon" />
            <p>Servings</p>
            <ul>
              <li>4-6</li>
            </ul>
          </div>

          <div className="recipe-info">
            <img src="/images/filter_icons/allergies.png" alt="Allergies" className="filter-icon" />
            <p>Allergies</p>
            <ul>
              <li>None</li>
            </ul>
          </div>

          <div className="recipe-info">
            <img src="/images/filter_icons/diet_type.png" alt="Diet Type" className="filter-icon" />
            <p>Diet Type</p>
            <ul>
              <li>None</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeOutline;