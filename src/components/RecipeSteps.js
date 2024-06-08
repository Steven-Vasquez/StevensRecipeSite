export function RecipeSteps({ title, steps }) {
    return (
        <div className="recipe-steps-container">
            <h3>Steps for {title}</h3>
            <ol>
                {steps.map((step, index) => (
                    <li key={index}>{index}. {step}</li>
                ))}
            </ol>
        </div>
    );
}

export default RecipeSteps;