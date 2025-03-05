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
        
                // Transform data for RecipeOpening and RecipeTemplate
                const mainInfo = {
                    recipeName: data.recipe_name,
                    starRating: data.star_rating,
                    recipeCredit: data.author_name,
                    descriptionShort: data.recipe_description,
                    tags: [
                        ...(data.allergies || []).map(a => a.allergy_name),
                        ...(data.diets || []).map(d => d.diet_type_name),
                        ...(data.dish_types || []).map(dt => dt.dish_type_name)
                    ],
                    recipeImage: data.recipe_image_url,
                    prepTime: data.prep_time_mins,
                    totalTime: data.total_time_mins,
                    servings: data.servings
                };
        
                const templateData = {
                    component_names: data.components.map(c => c.component_title),
                    ingredients: data.components.map(c => 
                        c.ingredients.map(i => [i.quantity, i.ingredient_text, i.ingredient_notes])
                    ),
                    step_titles: data.components.map(c => c.component_title),
                    steps: data.components.map(c => 
                        c.steps.map(s => [s.step_description, s.step_notes])
                    ),
                    recipe_notes: data.notes.map(n => n.note_text)
                };
        
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