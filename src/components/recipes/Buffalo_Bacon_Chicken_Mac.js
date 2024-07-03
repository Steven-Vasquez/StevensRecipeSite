import React from 'react';
import RecipeTemplate from '../RecipeTemplate';
import RecipeIngredients from '../RecipeIngredients';

export function BuffaloBaconChickenMac() {
    return (
        <div>

            <RecipeTemplate
                component_names={["Slow Cooked Chicken", "Blended Buffalo Cheese Sauce", "Everything else"]}
                ingredients={[
                    [
                        ["2", "lb chicken breast"],
                        ["1/2", "cup buffalo sauce"],
                        ["~2", "tbsp worscheshire sauce"],
                        ["1", "tbsp chicken bouillon"],
                        ["", "salt/pepper/garlic to taste"],
                        ["3", "orange bell peppers"],
                        ["2", "onions"],
                    ],
                    [
                        ["800", "g 2% cottage cheese"],
                        ["50", "g 1/3 fat cream cheese"],
                        ["100", "g extra sharp cheddar cheese"],
                        ["60", "g parmigiano reggiano (or normal parmesan cheese)"],
                        ["120", "g buffalo sauce"],
                        ["300", "ml milk"],
                        ["30", "g honey"],
                        ["", "salt & pepper to taste"],
                    ],
                    [
                        ["672", "pasta, cooked to 50%"],
                        ["18", "slices center cut bacon"],
                        ["chopped chives (optional)"],
                    ]
                ]}
                step_titles={["Slow Cooked Chicken", "Blended Buffalo Cheese Sauce", "Final Steps"]}
                steps={[
                    [
                        "Roast onions and bell peppers in oven at 400F for 20-25 minutes",
                        "Add all ingredients to slow cooker and cook on low for 3-4 hours or high for 2-3 hours",
                        "Shred chicken with some tongs",
                    ],
                    [
                        "Blend all ingredients together until smooth",
                    ],
                    [
                        "Cook bacon on foil-lined baking sheet in oven at 400F for 20-30 minutes",
                        "Cook pasta to 50% and drain",
                        "Mix chicken mix with noodles, then mix in cheese sauce and cover/cook for 20-30 mins",
                        "Mix in/top with crumbled bacon and chopped chives",
                    ]
                ]}
            />
        </div>
    )
}

export default BuffaloBaconChickenMac;