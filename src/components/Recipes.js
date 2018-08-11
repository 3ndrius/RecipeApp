import React from 'react';
import {Link} from "react-router-dom";
const Recipes = (props) => (
      
  props.recipes.map((recipe) => {
    

    const title = recipe.title;
 
     
    
            return(
              <div key={recipe.recipe_id} className="grid-item"> 
               <div className="figure-wrap">  <img src={recipe.image_url} alt={recipe.title} /> </div>
                <h4 className="title"> {title.length > 25 ? title.slice(0, 25) : title }  </h4>
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
