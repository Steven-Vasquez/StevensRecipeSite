import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecipeOpening from '../components/RecipeOpening';
import RecipeTemplate from '../components/RecipeTemplate';

const RecipePage = () => {
    const { recipe_slug } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate

    const [recipeData, setRecipeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        const fetchRecipeData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/recipes/${recipe_slug}`);
                //console.log(response);
                // Handle 404 errors separately
                if (response.status === 404) {
                    throw new Error('Recipe not found');
                }
        
                // Check content type for non-404 errors
                const contentType = response.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new Error('Received non-JSON response');
                }
        
                // Handle other non-OK responses
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
                }
        
                // Parse and process successful response
                const data = await response.json();
                console.log("THE RECIPE DATA IS...");
                console.log(data);
        
                // Transform data for RecipeOpening and RecipeTemplate
                const mainInfo = {
                    recipeName: data.recipe_name,
                    starRating: data.star_rating,
                    recipeCredit: data.author_name,
                    descriptionShort: data.recipe_description,
                    tags: [
                        ...(Array.isArray(data.allergies) ? data.allergies.map(a => a.allergy_type_name) : []),
                        ...(Array.isArray(data.diets) ? data.diets.map(d => d.diet_type_name) : []),
                        ...(Array.isArray(data.dish_types) ? data.dish_types.map(dt => dt.dish_type_name) : [])
                    ],
                    recipeImage: data.recipe_image_url,
                    prepTime: data.prep_time_mins,
                    totalTime: data.total_time_mins,
                    servings: data.servings
                };
                
                // Transform data for RecipeTemplate
                const templateData = { 
                    component_names: Array.isArray(data.recipe_components) 
                        ? data.recipe_components.map(c => c.component_name) 
                        : [],
                
                    ingredients: Array.isArray(data.recipe_components)
                        ? data.recipe_components.map(c =>
                            Array.isArray(c.ingredients)
                                ? c.ingredients.map(i => [i.quantity, i.name, i.ingredient_notes])
                                : []
                        )
                        : [],
                
                    step_titles: Array.isArray(data.instructions) 
                        ? data.instructions.map(c => c.step_title) 
                        : [],
                
                    steps: Array.isArray(data.instructions)
                        ? data.instructions.map(c =>
                            Array.isArray(c.steps)
                                ? c.steps.map(s => [s.instruction, s.step_notes])
                                : []
                        )
                        : [],
                
                    recipe_notes: Array.isArray(data.recipe_notes) ? data.recipe_notes : []
                };
                
                //console.log ("THE TEMPLATE DATA IS...");
                //console.log(templateData);

                setRecipeData({ mainInfo, templateData });
                setError(null);
            } catch (err) {
                setError(err.message);
                setRecipeData(null);
        
                // Redirect to home page if recipe is not found
                if (err.message === 'Recipe not found') {
                    navigate('/', { replace: true }); // Redirect to home page
                }
            } finally {
                setLoading(false);
            }
        };

        fetchRecipeData();
    }, [recipe_slug]); // Add recipe_slug as a dependency

    if (loading) {
        return <div className="loading-screen">Loading recipe...</div>;
    }

    if (error) {
        return <div className="error-screen">Error loading recipe: {error}</div>;
    }

    return (
        <div className="recipe-page-container">
            {recipeData && (
                <>
                    <RecipeOpening {...recipeData.mainInfo} />
                    <RecipeTemplate {...recipeData.templateData} />
                </>
            )}
        </div>
    );
};

export default RecipePage;