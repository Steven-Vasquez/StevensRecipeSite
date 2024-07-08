// source https://www.everythingalexcooks.com/recipes/korean-fried-whole-fish
import React from 'react';
import RecipeTemplate from '../RecipeTemplate';
import RecipeOpening from "../../components/RecipeOpening"

export function DadsMeatSauce() {
    return (
        <div>
            <RecipeOpening
                recipeName={"Dad's Classic Meat Sauce"}
                starRating={5}
                recipeCredit={"My Dad"}
                descriptionShort={"A classic Italian meat sauce that my dad made for my family on most Sundays."}
                tags={["Italian", "Pasta", "All Day", "Family Recipe"]}
                recipeImage={"../../images/no_image_available.jpeg"}
                prepTime={"30 min"}
                totalTime={"8+ hr 0 min"}
                servings={"?"}
            />

            <div>
                <RecipeTemplate
                    component_names={["Sauce"]}
                    ingredients={[
                        [
                            ["1-2", "lbs Bone-in country ribs OR short ribs (pork or beef)"],
                            ["4-6", "Italian sausages"],
                            ["2", "14.5 oz cans of diced (or crushed) tomatoes"],
                            ["1", "8 oz can of tomato sauce"],
                            ["1", "6 oz can of tomato paste"],
                            ["1", "medium onion, diced"],
                            ["6-8", "cloves of garlic, minced"],
                            ["?", "tbps of italian seasoning"],
                            ["2-3", "bay leaves"],
                            ["", "salt & pepper to taste"],
                            ["", "olive oil"]
                            ["", "red wine (optional)"]
                        ],
                    ]}
                    step_titles={["Sauce"]}
                    steps={[
                        [
                            "After seasoning the ribs with salt and pepper, sear both the ribs and italian sausages in olive oil. Remove and set aside.",
                            "In a large pot, saute the onions and garlic in olive oil until fragrant/slightly translucent.",
                            "OPTIONALLY, add red wine, and let it reduce.",
                            "Add the canned tomatoes (not sauce/paste), 2 cans worth of water, and seasonings. Reduce heat to low and cover pot.",
                            "Stir approximately every 30 minutes for 6-12 hours, allowing the meat to braise and the liqid to reduce."
                        ]
                    ]}
                />                
            </div>

        </div>


    );
}

export default DadsMeatSauce;