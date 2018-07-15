import React from 'react';

import {Link} from "react-router-dom";
const Recipes = (props) => (
      
  props.recipes.map((recipe) => {
           
            return(
              <div key={recipe.recipe_id} className="grid-item"> 
                <img src={recipe.image_url} alt={recipe.title} />
                <h4 className="title"> {recipe.title} </h4>
                <p className="author">Publisher: <span>{recipe.publisher}</span> </p>
                <button className="btn">
                  <Link to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: {recipe: recipe.title}
                    }}> View Recipe </Link>
                </button>
              </div>
            );
            
        }) 

      
        

);

export default Recipes;