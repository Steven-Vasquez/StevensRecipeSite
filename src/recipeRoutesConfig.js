// The purpose of this file is to reduce clutter in App.js and make it easier to add new recipes to the website.
import React from 'react';

const KoreanFriedYellowCroaker = React.lazy(() => import('./components/recipes/Korean_Fried_Yellow_Croaker.js'));
const ChickenTikka = React.lazy(() => import('./components/recipes/Chicken_Tikka.js'));

const recipeRoutesConfig = [
    {
        path: "/recipes/Korean_Fried_Yellow_Croaker",
        component: KoreanFriedYellowCroaker,
        title: "Korean Fried Yellow Croaker",
        description: "A classic korean fried fish recipe",
    },
    {
        path: "/recipes/Chicken_Tikka",
        component: ChickenTikka,
        title: "Chicken Tikka",
        description: "The Shan Chicken Tikka Mix recipe with a side and sauce I created.",

    }
    // Add more recipes here
];

export default recipeRoutesConfig;