
import {Link} from "react-router-dom";
import React, { Component } from 'react'
export default class Recipes extends Component {
  render() {

   const {recipes} = this.props;

   const recipeList = recipes.map( recipe => {
    return (
      <div key={recipe.recipe_id} className="grid-item"> 
                      <div className="figure-wrap">  <img src={recipe.image_url} alt={recipe.title} /> </div>
                       <h4 className="title"> {recipe.title.length > 25 ? recipe.title.slice(0, 25) : recipe.title }  </h4>
                       <p className="author">Publisher: <span>{recipe.publisher}</span> </p>
                       <button className="btn">
                        <Link to={{
                           pathname: `/recipe/${recipe.recipe_id}`,
                          state: {recipe: recipe.title}
                         }}> View Recipe </Link>
                      </button>
            </div>
    )
   })

    return (
      <div className="grid">
      {recipeList}
        
      </div>
    )
  
  }
}
