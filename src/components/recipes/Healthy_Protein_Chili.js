// source https://www.everythingalexcooks.com/recipes/korean-fried-whole-fish
import React from 'react';
import RecipeTemplate from '../RecipeTemplate';
import RecipeOpening from "../../components/RecipeOpening"

export function HealthyProteinChili() {
    return (
        <div>
            <RecipeOpening
                recipeName={"Healthy Protein Chili"}
                starRating={5}
                recipeCredit={"Internet & Steven"}
                descriptionShort={"A combination of recipes I found online to make a tasty, healthy, and affordable chili."}
                tags={["Healthy", "Affordable"]}
                recipeImage={"../../images/no_image_available.jpeg"}
                prepTime={"0 min"}
                totalTime={"0+ hr 0 min"}
                servings={"?"}
            />

            <div>
                <RecipeTemplate
                    component_names={["Chili Core Ingredients", "Bonus Ingredients", "Optional Toppings"]}
                    ingredients={[
                        [
                            ["1", "tbsp of olive oil"],
                            ["2", "lbs of ground beef (or chicken or turkey)"],
                            ["1", "medium white onion, diced"],
                            ["4", "cloves of garlic, minced"],
                            ["2", "16oz cans of dark kidney beans, drained and rinsed"],
                            ["1", "14.5oz can fire roasted diced tomatoes (regular canned diced tomatoes work too)"],
                            ["2", "4oz can diced greed chiles"],
                            ["1", "cup chicken or beef broth"],
                            ["1", "bay leaf"],
                            ["2", "tbsp chili powder"],
                            ["1/2", "tbsp cumin"],
                            ["2", "tbsp salt, plus more to taste"],
                            ["1","tsp dried oregano"],
                            ["1","tsp smoked paprika"],
                            ["1/2","tsp ceyenne pepper (optional)"],
                            ["1/2","tsp black pepper, plus more to taste"],
                        ],
                        [
                            ["2","bell peppers, diced"],
                            ["1"," 15.5 oz can garbonzo beans, drained and rinsed"],
                            ["1-2","tbsp worshestershire sauce"],
                            ["1-2","medium zuchinis, diced"],
                            ["1-2","tbsp coaco powder"],
                            ["8-12","oz (1 package) of baby bella or white mushrooms, diced"],
                        ],
                        [
                            ["", "Shredded cheese"],
                            ["", "Sour cream"],
                            ["", "Chopped green onions"],
                            ["", "Sliced avocado"],
                        ]
                    ]}
                    step_titles={["Chili"]}
                    steps={[
                        [
                            "Blend or finely chop the mushrooms",
                            "Brown the ground meat with olive oil, drain and set aside.",
                            "Use excess fat to saute onions and garlic until fragrant.",
                            "Add all core chili ingredients to slow cooker",
                            "Cook on low for 5-6 hours or high for 3-4 hours.",
                            "In the last hour of cooking, add the zuccini and/or garbonzo beans if included.",
                        ]
                    ]}
                />        
                        
            </div>

        </div>


    );
}

export default DadsMeatSauce;