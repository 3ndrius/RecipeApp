import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
const API_KEY = "53c2c4dd92ce54fe6bf9b7acbf8248c5";
export default class Recipe extends Component {
    state = {
        activeRecipe: [],
        recipes: [],
        loading:true,
        napis: "Loading..."
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const json = localStorage.getItem("recipes");
         const recipes = JSON.parse(json);
        const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        // const req = await fetch(`https://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await req.json();
        this.setState({
        activeRecipe: res.recipes[0],
        recipes:recipes,
        loading:false
        });        
    };
  render() {
        const recipe = this.state.activeRecipe;   
   
    return (
   this.state.loading ? <div className="loading"> {this.state.napis} </div> : 
   <div className="recipe-container">
   <Menu/>
     <Header header="MEAL" tips="Enjoy your favourite meal."/>
     <div className="card">
         <div className="figure"> 
         <img src={recipe.image_url} alt={recipe.title} />
         </div>
         <div className="figure-caption"> 
          <div className="head"> 
          <h2> {recipe.title} </h2> 
          <a>{recipe.source_url} </a>
          </div>
          <h5>Publisher: {recipe.publisher} </h5>     
         <Link to="/"><button className="btn3"> Go back </button>  </Link>
         </div>
      </div>
       <Footer />
   </div>
    )
  }
};
