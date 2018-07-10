import React, { Component } from 'react';


import { Link } from 'react-router-dom';


const API_KEY = "53c2c4dd92ce54fe6bf9b7acbf8248c5";


export default class Recipe extends Component {

    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        
        const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const res = await req.json();
        this.setState({
        activeRecipe: res.recipes[0]
        });
        console.log(this.state.activeRecipe);
       
    
    };
      

  render() {
        const recipe = this.state.activeRecipe;
     
    return (
      <div className="container-grid">
      <div className="header"> RecipeBook </div>
          <div className="figure"><img src={recipe.image_url} alt={recipe.title} /></div>
          <div className="firure-caption"> <h2> {recipe.title} </h2> </div>
          <div className="author"> <h5>Publisher: {recipe.publisher} </h5> </div>
          <div className="link"> <a>{recipe.source_url} </a> </div>
          <button className="btn3">
            <Link to="/"> Go back </Link>
          </button>
        
      </div>
    )
  }
};
