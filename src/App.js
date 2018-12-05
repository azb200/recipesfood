import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";
// import Navigation from "./components/Navigation";
//import img from "./components/img/banner.png";

// Api Key here
var API_KEY = "df2f3c8225c4f5c4daf847e08dd0f1d7";

class App extends Component {
  state = {
    recipes: []
  }
  //  Url Api call element here
  getRecipe = async (e) => {
    var recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    var api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`);
    
    var data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    var json = localStorage.getItem("recipes");
    var recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    var recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    
    
    return (

      <div className="App">
        <header className="App-header">
      <div className="LOGO">
        <h1 className="App-title">FOOD<span className="Recipe">Recipes</span></h1>
      </div>
       
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
        <Footer />
      </div>
    
    );
  }
}

export default App;