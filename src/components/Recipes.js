import React from 'react';

const Recipes = (props) => (
        
          props.recipes.map((recipe) => {
            return(
              <div key={recipe.recipe_id}> 
                <img src={recipe.image_url} alt={recipe.title} />
                <p > {recipe.title} </p>
              </div>
            );
            
        }) 
        

);

export default Recipes;