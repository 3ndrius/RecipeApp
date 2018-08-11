import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';
const API_KEY = "53c2c4dd92ce54fe6bf9b7acbf8248c5";
export default class Recipe extends Component {

    state = {
        activeRecipe: [],
        recipes: []  
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const json = localStorage.getItem("recipes");
         const recipes = JSON.parse(json);
        const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const res = await req.json();
        this.setState({
        activeRecipe: res.recipes[0],
        recipes:recipes
        });
        console.log(this.state.recipes);
    };
  render() {
        const recipe = this.state.activeRecipe;   
    return (
    <div className="recipe-container">
      <Menu/>
        <Header header="MEAL"/>
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
             <button className="btn3">
            <Link to="/"> Go back </Link>
          </button> 
             

            </div>

         </div>





      {/* <div className="figure"><img src={recipe.image_url} alt={recipe.title} /></div>
          <div className="firure-caption"> <h2> {recipe.title} </h2> </div>
          <div className="author">  </div>
          <div className="link"> <a>{recipe.source_url} </a> </div>
          <button className="btn3">
            <Link to="/"> Go back </Link>
          </button>  */}
     
      {/* <div className="header2" > See also ! </div>
      <div className="mini-grid">
          <Minirecipe recipes = {this.state.recipes}/>
          </div> */}
          <Footer />
      </div>
    )
  }
};
