import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeTemplate from '../components/RecipeTemplate';

export default function RecipePage() {
    const { slug } = useParams();
    const [recipeData, setRecipeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`/api/recipes/${slug}`);
                if (!response.ok) throw new Error('Recipe not found');
                const data = await response.json();
                
                // Transform data into the format RecipeTemplate expects
                const transformedData = {
                    component_names: data.components.map(c => c.component_title),
                    ingredients: data.components.map(c => c.ingredients),
                    step_titles: data.components.map(c => c.component_title),
                    steps: data.components.map(c => c.steps),
                    recipe_notes: data.notes
                };

                setRecipeData(transformedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [slug]);

    if (loading) return <div className="loading">Loading recipe...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="recipe-page">
            <RecipeTemplate {...recipeData} />
        </div>
    );
}