import React from 'react';
import RecipeTemplate from '../RecipeTemplate';
import RecipeOpening from "../../components/RecipeOpening"

export function WIP_Canned_Cioppino() {
    return (
        <div>
            <RecipeOpening
                recipeName={"WIP Canned Cioppino"}
                starRating={4}
                recipeCredit={"Steven"}
                descriptionShort={"A recipe inspired by my dad's clam pasta sauce recipe with olives and San Francisco's Cioppino."}
                tags={["Easy", "Pasta", "Seafood"]}
                recipeImage={"../../images/no_image_available.jpg"}
                prepTime={"10 min"}
                totalTime={"?"}
                servings={100}
            />

            <div>
                <RecipeTemplate
                    component_names={["Sauce"]}
                    ingredients={[
                        [
                            ["1", "15oz can tomato sauce"],
                            ["1", "14.5oz can diced tomatoes"],
                            ["3", "3.75oz cans of sardines in extra virgin olive oil"],
                            ["2", "6.5oz cans of clams in clam juice"],
                            ["?", "shrimp"],
                            ["1", "14.5 oz can dices tomatoes"],
                            ["1/2 (try 1 next time)", "diced yellow onion"],
                            ["8", "oz blended mushrooms"],
                            ["~18", "fourthed green olives with pimiento"],
                            ["?", "capers"],
                            ["?", "minced garlic cloves"],
                            ["?", "salt"],
                            ["?", "pepper"],
                            ["?", "italian seasoning"],
                            ["?", "medium shell pasta"],
                            ["?", "lemon/lemon juice"],
                            ["?", "tabasco sauce"],
                        ],
                    ]}
                    step_titles={["Sauce"]}
                    steps={[
                        [
                            "Pour all olive oil from cans sardines into pot.",
                            "Saute onions and garlic in olive oil until onions are translucent w/ salt/pepper.",
                            "Add mushrooms, diced tomatoes, canned chiles, olives, capers, and italian seasoning.",
                            "Pour in clam juice from 1 can of clams and a dash of olive juice.",
                            "Reduce on medium heat.",
                            "Add clam juice from other can of clams, tomato sauce, and chopped sardines.",
                            "Reduce until a near sauce-like consistency.",
                            "Add shrimp and clams as pasta is cooking. Need to add towards the end to avoid chewy shrimp and clams.",
                            "Serve with lemon juice and tabasco sauce as desired.",
                        ],
                    ]}
                />

                
                
            </div>

        </div>


    );
}

export default WIP_Canned_Cioppino;