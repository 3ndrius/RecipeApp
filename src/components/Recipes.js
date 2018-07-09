import React from 'react';

const Recipes = (props) => (
        
          props.recipes.map((recipe) => {
            return(
              <div key={recipe.recipe_id} className="grid-item"> 
                <img src={recipe.image_url} alt={recipe.title} />
                <h2 > {recipe.title} </h2>
                <button className="btn">More </button>
              </div>
            );
            
        }) 
        

);

export default Recipes;