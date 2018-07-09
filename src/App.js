import React, { Component } from 'react';
import './App.css';

// own components
import Form from "./components/Form";



const API_KEY = "53c2c4dd92ce54fe6bf9b7acbf8248c5";



class App extends Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);

    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
    console.log(this.state.recipes);
    
    
  }
  render() {
    return (
      <div className="app">
        <Form getRecipe={this.getRecipe}/>
        
        {
          this.state.recipes.map((recipe) => {
            return <p key={recipe.recipe_id}> {recipe.title} </p>

        }) 
        }
       
      </div>
    );
  }
}

export default App;
