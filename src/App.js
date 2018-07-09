import React, { Component } from 'react';
import './App.css';

// own components
import Form from "./components/Form";

class App extends Component {

  getRecipe = (e) => {

    e.preventDefault();
    console.log("Working");
  }


  render() {
    return (
      <div className="app">
        <Form getRecipe={this.getRecipe}/>
       
      </div>
    );
  }
}

export default App;
