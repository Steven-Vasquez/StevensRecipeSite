// Source: Me
import React from 'react';
import RecipeTemplate from '../RecipeTemplate';
import RecipeOpening from "../../components/RecipeOpening"


export function ChickenTikka() {
    return (
        <div>
            <RecipeOpening
                recipeName={"Chicken Tikka with Lentils & Garbonzo Beans"}
                starRating={4}
                recipeCredit={"Shan Chicken Tikka Mix"}
                descriptionShort={"A quick and easy chicken tikka recipe that is perfect for a weeknight dinner. The lentils and garbonzo beans add a nice touch of protein and fiber to the meal. Serve with a side of cole slaw for a refreshing crunch!"}
                tags={["Quick", "Easy", "Nutritious"]}
                recipeImage={"../../images/no_image_available.jpg"}
                prepTime={"30 min"}
                totalTime={"6 hr 10 min"}
                servings={30}
            />

            <RecipeTemplate
                component_names={["Chicken", "Sauce", "Lentils & Garbonzo Beans", "Cole Slaw"]}
                ingredients={[
                    [
                        ["3.3", "lb bone in chicken thighs"],
                        ["1", "packet Shan Chicken Tikka Mix"],
                        ["8-10", "tbsp lemon juice"],
                        ["6", "tbsp oil or butter"],
                    ],
                    [
                        ["1", "cup plain yogurt (Greek yogurt works well for a thicker sauce)"],
                        ["1", "tbps lemon juice"],
                        ["1", "tsp ground cumin"],
                        ["1", "tsp ground coriander"],
                        ["1", "tsp paprika"],
                        ["1", "tsp garlic powder or 1 minced garlic clove"],
                        ["1/2", "tsp ground turmeric"],
                        ["1/2", "tsp salt (adjust to taste)"],
                        ["1/4", "tsp black pepper"],
                        ["1/4", "tsp cayenne pepper (optional, for heat)"],
                        ["1", "tbsp olive oil (optional, for richness)"],
                        ["1", "tbsp chopped fresh cilantro (optional)"],
                    ],
                    [
                        ["1", "cup of lentils"],
                        ["3", "cups of water or broth"],
                        ["One", "15.5 oz can of garbonzo beans"],
                        ["1", "onion"],
                        ["2", "minced garlic cloves"],
                        ["1", "tsp of ground cumin, ground coriander, and ground turmeric"],
                        ["","Salt and pepper to taste"],
                        ["","Fresh cilantro (optional)"]
                    ],
                    [
                        ["Cole slaw mix"]
                    ]
                ]}
                step_titles={["Chicken", "Sauce", "Lentils & Garbonzo Beans", "Cole Slaw"]}
                steps={[
                    [
                        "<strong>Make ~3 slits in the chicken thighs</strong>",
                        "Combine 8-10 tbps lemon juice, Shan Chicken Tikka Mix, and 6 tbsp oil or butter in a bowl",
                        "Marinate chicken in the mixture for 3+ hours",
                        "Cook in frying pan with olive oil skin side down for 5 mins until good coloring. Flip/repeat.",
                        "Bake in oven at 350F for (until 165 degrees) mins",
                    ],
                    [
                        "Combine all ingrdients in a bowl and mix well. Refrigerate for at least 30 mins before serving to allow flavors to meld.",
                        "Serve with Sriracha or other hot sauce if desired."
                    ],
                    [
                        "Rinse 1 cup of lentils under cold water.",
                        "In a pot, combine lentils with 3 cups of water or broth.",
                        "Bring to a boil, then reduce heat and simmer.",
                        "Cook until tender (20-30 minutes for green/brown lentils, 15-20 minutes for red/yellow lentils).",
                        "Drain any excess liquid and set aside.",
                        "In a large skillet saute 2 minced garlic cloves and 1 diced onion in 1 tbsp of oil until translucent.",
                        "Stir in 1 can of drained garbonzo beans with the lentils and heat through (5-10 minutes).",
                        "Add fresh cilantro if desired."
                    ],
                    [
                        "Serve with some premade cole slaw for refreshing crunch!"
                    ]
                ]}
            />
            
        </div>


    );
}

export default ChickenTikka;