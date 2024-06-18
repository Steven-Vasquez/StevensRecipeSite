// The purpose of this file is to reduce clutter in App.js and make it easier to add new recipes to the website.
import React from 'react';

const KoreanFriedYellowCroaker = React.lazy(() => import('./components/recipes/Korean_Fried_Yellow_Croaker.js'));

const recipeRoutesConfig = [
    {
        path: "/recipes/Korean_Fried_Yellow_Croaker",
        component: KoreanFriedYellowCroaker,
        title: "Korean Fried Yellow Croaker",
        description: "A classic korean fried fish recipe",
    },
    // Add more recipes here
];

export default recipeRoutesConfig;