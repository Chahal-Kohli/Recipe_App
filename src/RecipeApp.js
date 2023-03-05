
import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';
function RecipeApp() {
    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const handleAddIngredient = (event) => {
        event.preventDefault();
        const newIngredient = event.target.elements.ingredient.value.trim();
        if (newIngredient !== '' && !ingredients.includes(newIngredient)) {
            setIngredients([...ingredients, newIngredient]);
        }
        event.target.reset();
    };

    const handleCheckRecipes = () => {
        const API_KEY = 'e96e5c481f404b4a8d459625b82b4141';
        const API_URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(',')}&apiKey=${API_KEY}`;

        fetch(API_URL)
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Recipe Sharing Website</h1>
            <form onSubmit={handleAddIngredient}>
                <input type="text" name="ingredient" placeholder="Enter an ingredient" />
                <button type="submit">Add</button>
            </form>
            {ingredients.length > 0 && (
                <div className='Ingredients-box'>
                    <h2>Ingredients</h2>
                    <ul >
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <button type='button' onClick={handleCheckRecipes}>Check Recipes</button>
                </div>
            )}
            {recipes.length > 0 && (
                <div>
                    <h1 className='Recipes-Heading'>Recipes</h1>
                    <div className="recipe-grid">
                        {recipes.map(recipe => (
                            <Recipe key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                </div>
            )
            }
        </div >
    );
}

export default RecipeApp;


