import React from 'react';

function Recipe({ recipe }) {
    return (
        <div>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <ul>
                {recipe.usedIngredients.map(ingredient => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>

            <p>Missing ingredients: {recipe.missedIngredientCount}</p>
        </div>
    );
}
export default Recipe;

