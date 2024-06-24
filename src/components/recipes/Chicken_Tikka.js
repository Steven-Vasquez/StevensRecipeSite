// Source: Me
import React from 'react';
import RecipeSteps from '../RecipeSteps';
import RecipeIngredients from '../RecipeIngredients';

export function ChickenTikka() {
    return (
        <div>
            {/* INGREDIENTS */}
            <RecipeIngredients
                component_name={"Chicken"}
                ingredients={[
                    "3.3 lb bone in chicken thighs",
                    "1 packet Shan Chicken Tikka Mix",
                    "8-10 tbsp lemon juice",
                    "6 tbsp oil or butter",
                ]} />

            <RecipeIngredients
                component_name={"Sauce"}
                ingredients={[
                    "1 cup plain yogurt (Greek yogurt works well for a thicker sauce)",
                    "1 tablespoon lemon juice",
                    "1 teaspoon ground cumin",
                    "1 teaspoon ground coriander",
                    "1 teaspoon paprika",
                    "1 teaspoon garlic powder or 1 minced garlic clove",
                    "1/2 teaspoon ground turmeric",
                    "1/2 teaspoon salt (adjust to taste)",
                    "1/4 teaspoon black pepper",
                    "1/4 teaspoon cayenne pepper (optional, for heat)",
                    "1 tablespoon olive oil (optional, for richness)",
                    "1 tablespoon chopped fresh cilantro (optional)",
                ]} />

            <RecipeIngredients
                component_name={"Lentils & Garbonzo Beans"}
                ingredients={[
                    "1 cup of lentils",
                    "3 cups of water or broth",
                    "One 15.5 oz can of garbonzo beans",
                    "1 onion",
                    "2 minced garlic cloves",
                    "1 tsp of ground cumin, ground coriander, and ground turmeric",
                    "Salt and pepper to taste",
                    "Fresh cilantro (optional)"
                ]} />

            <RecipeIngredients
                component_name={"Cole Slaw"}
                ingredients={[
                    "Cole slaw mix"
                ]} />

            {/* STEPS */}
            <RecipeSteps
                title={"Chicken"}
                steps={[
                    "1. Make ~3 slits in the chicken thighs",
                    "2a. Combine 8-10 tbps lemon juice, Shan Chicken Tikka Mix, and 6 tbsp oil or butter in a bowl",
                    "2b. Marinate chicken in the mixture for 3+ hours",
                    "3. Cook in frying pan with olive oil skin side down for 5 mins until good coloring. Flip/repeat.",
                    "4. Bake in oven at 350F for (until 165 degrees) mins",
                ]} />

            <RecipeSteps
                title={"Sauce"}
                steps={[
                    "Combine all incgrdients in a bowl and mix well. Refrigerate for at least 30 mins before serving to allow flavors to meld.",
                    "Serve with Sriracha or other hot sauce if desired."
                ]}
            />

            <RecipeSteps
                title={"Lentils & Garbonzo Beans"}
                steps={[
                    "1. Rinse 1 cup of lentils under cold water.",
                    "2. In a pot, combine lentils with 3 cups of water or broth.",
                    "3. Bring to a boil, then reduce heat and simmer.",
                    "4. Cook until tender (20-30 minutes for green/brown lentils, 15-20 minutes for red/yellow lentils).",
                    "5. Drain any excess liquid and set aside.",
                    "",
                    "COMBINING",
                    "6. In a large skillet saute 2 minced garlic cloves and 1 diced onion in 1 tbsp of oil until translucent.",
                    "7. Stir in 1 can of drained garbonzo beans and heat through (5-10 minutes).",
                    "8. Add fresh cilantro if desired."
                ]}
            />

            <RecipeSteps
                title={"Cole Slaw"}
                steps={[
                    "Serve with some premade cole slaw for refreshing crunch!"
                ]}
            />
        </div>


    );
}

export default ChickenTikka;