import React, { Component } from 'react';
import './App.css';

// own components
import Form from "./components/Form";
import Recipes from './components/Recipes';
import Menu from './components/Menu';

const API_KEY = "53c2c4dd92ce54fe6bf9b7acbf8248c5";
class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=9`);

    const data = await api_call.json();
    this.setState({
      recipes: data.recipes
    });
  }
  componentDidMount = () => {

    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({
      recipes: recipes
    });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes); 
}
  render() {
    return (
      <div className="app">
      <Menu/>
        <Form getRecipe={this.getRecipe}/>
        <div className="grid">
        <Recipes recipes = {this.state.recipes}/>
        
        </div>
      </div>
    );
  }
}
export default App;
