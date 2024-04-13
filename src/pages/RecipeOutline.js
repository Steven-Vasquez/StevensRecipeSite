import "../stylesheets/RecipeOutline.css";

export function RecipeOutline() {

  return (
    <div className="page-container">
      <div className="recipe-card-opening">
        <div className="recipe-name-container">
          <h2 className="recipe-name">Fried Rice</h2>
          <p className="recipe-credit">Recipe by: Me</p>
          <div className="tags-container">
            <span className="tag">Quick</span>
            <span className="tag">Easy</span>
            <span className="tag">One pot</span>
            <span className="tag">Meal Prep</span>
            {/* Add more tags here */}
          </div>
        </div>

        <div className="recipe-image-container">
          <img src="/images/recipe_images/fried_rice/fried_rice.jpg" alt="Fried Rice" />
        </div>
        <div className="basic-info-container">
          info
        </div>

      </div>
    </div>
  );
}

export default RecipeOutline;