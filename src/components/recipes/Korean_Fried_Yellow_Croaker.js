// source https://www.everythingalexcooks.com/recipes/korean-fried-whole-fish
import React from 'react';
import RecipeTemplate from '../RecipeTemplate';
import RecipeOpening from "../../components/RecipeOpening"

export function KoreanFriedYellowCroaker() {
    return (
        <div>
            <RecipeOpening
                recipeName={"Korean Fried Yellow Croaker"}
                starRating={4.5}
                recipeCredit={"Everything Alex Cooks"}
                descriptionShort={"Korean Fried Yellow Croaker"}
                tags={["Quick", "Easy", "One pan", "Korean"]}
                recipeImage={"/images/recipe_images/Korean_Fried_Yellow_Croaker/Korean Fried Yellow Croaker.jpeg"}
                prepTime={"30 min"}
                totalTime={"6 hr 10 min"}
                servings={30}
            />

            <div>
                <RecipeTemplate
                    component_names={["Fish", "Sauce"]}
                    ingredients={[
                        [
                            ["1.5", "lbs Korean salted yellow croaker/corvina, defrosted (or fresh red snapper, branzino, any mild, flaky white fish)"],
                            ["2", "tbsp potato starch or cornstarch"],
                            ["2", "tbsp flour"],
                            ["2", "tbsp neutral oil (grapeseed, avocado, canola etc.)"]
                        ],
                        [
                            ["1/4", "cup soy sauce"],
                            ["1", "tbsp rice wine vinegar"],
                            ["2", "tbsp honey"],
                            ["2", "tsp sesame oil"],
                            ["2", "tbsp gochugaru (Korean red pepper flakes)"],
                            ["1", "tbsp white sesame seeds"],
                            ["4", "scallions, chopped"],
                            ["2", "cloves garlic, finely diced"],
                            ["1", "jalapeno or Korean green pepper, diced"],
                            ["1", "tsp ginger"]
                        ]
                    ]}
                    step_titles={["Fish", "Sauce"]}
                    steps={[
                        [
                            "Add 2 tbsp potato starch (or cornstarch ) and 2 tbsp all-purpose flour to a large bowl. If fish is unsalted, add a pinch of salt to the bowl. Coat fish in the mixture.",
                            "Heat 2 tbsp neutral oil (enough to coat pan) until glossy. Gently place fish in pan. Fry for 5 mins. Flip and fry the other side for 5 minutes. Then fry each side an additional 2 minutes. The fish should fry for a total of 14-15 minutes, or until golden brown. Remove from pan.",
                            "Pour sauce on top of fish and serve with rice. Enjoy!"
                        ],
                        [
                            "Add all sauce ingredients in a small mixing bowl or jar. Mix well to dissolve the honey. (Alternatively, you could heat up the soy sauce in the microwave and dissolve the honey in the warm soy sauce, so the honey dissolves easier."
                        ]
                    ]}
                />

                
                
            </div>

        </div>


    );
}

export default KoreanFriedYellowCroaker;