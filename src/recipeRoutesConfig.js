// The purpose of this file is to reduce clutter in App.js and make it easier to add new recipes to the website.
import React from 'react';

const KoreanFriedYellowCroaker = React.lazy(() => import('./components/recipes/Korean_Fried_Yellow_Croaker.js'));
const ChickenTikka = React.lazy(() => import('./components/recipes/Chicken_Tikka.js'));
const DadsMeatSauce = React.lazy(() => import('./components/recipes/Dads_Meat_Sauce.js'));

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
    },
    {
        path: "/recipes/Dads_Meat_Sauce",
        component: DadsMeatSauce,
        title: "Dad's Classic Italian Meat Sauce",
        description: "A classic Italian meat sauce that my dad made for my family on most Sundays.",
    }
    // Add more recipes here
];

export default recipeRoutesConfig;