import React, {useState} from 'react';
import './App.css';

const Recipe=({title,calories,image, ingredients, url})=>{

    return(
        <div className='card' >
            <h1 className="title">{title}</h1>
            <p>Calories: {Math.round( calories)}</p>
            <img className='image' src={image} alt=""/>
            <ul>
            {ingredients.map(ingredient=>(
            <li>{ingredient.text}</li>
            ))}
            </ul> 
            <a href={url} target="_blank">Recipe</a>
        </div>
    )
}
export default Recipe;