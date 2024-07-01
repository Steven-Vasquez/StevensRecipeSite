import React from 'react';
import RecipeSteps from '../RecipeSteps';
import RecipeIngredients from '../RecipeIngredients';

export function BuffaloBaconChickenMac() {
    return (
        <div>
            {/* INGREDIENTS */}
            <RecipeIngredients
                component_name={"Slow Coooked Chicken"}
                ingredients={[
                    "2 lb chicken breast",
                    "1/2 cup buffalo sauce",
                    "~2 tbsp worscheshire sauce",
                    "1 tbsp chicken bouillon",
                    "salt/pepper/garlic to taste",
                    "3 orange bell peppers",
                    "2 onions",
                ]}
            />

            <RecipeIngredients
                component_name={"Blended Buffalo Cheese Sauce"}
                ingredients={[
                    "800 g 2% cottage cheese",
                    "50g 1/3 fat cream cheese",
                    "100 g extra sharp cheddar cheese",
                    "60g parmigiano reggiano (or normal parmesan cheese)",
                    "120 g buffalo sauce",
                    "300 ml milk",
                    "30g honey",
                    "salt & pepper to taste",
                ]}
            />

            <RecipeIngredients
                component_name={"Everything else"}
                ingredients={[
                    "672 pasta, cooked to 50%",
                    "18 slices center cut bacon",
                    "chopped chives (optional)",
                ]}
            />

            {/* STEPS */}
            <RecipeSteps
                title={"Slow Cooked Chicken"}
                steps={[
                    "1. Roast onions and bell peppers in oven at 400F for 20-25 minutes", 
                    "2. Add all ingredients to slow cooker and cook on low for 3-4 hours or high for 2-3 hours",
                    "3. Shred chicken with some tongs",
                ]}
            />

            <RecipeSteps
                title={"Blended Buffalo Cheese Sauce"}
                steps={[
                    "1. Blend all ingredients together until smooth",
                ]}
            />

            <RecipeSteps
                title={"Final Steps"}
                steps={[
                    "1. Cook bacon on foil-lined baking sheet in oven at 400F for 20-30 minutes",
                    "2. Cook pasta to 50% and drain",
                    "3. Mix chicken mix with noodles, then mix in cheese sauce and cover/cook for 20-30 mins",
                    "4. Mix in/top with crumbled bacon and chopped chives",
                ]}
            />
        </div>
    )
}

export default BuffaloBaconChickenMac;