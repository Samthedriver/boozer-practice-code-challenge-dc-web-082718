import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CocktailsContainer from "./components/CocktailsContainer";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Form from "./components/Form.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allCocktails: [],
      allIngredients: [],
      allProportions: [],
      currentCocktail: {}
    };
  }

  handleCocktailClick = id => {
    let currentCocktail = this.state.allCocktails.find(
      cocktail => cocktail.id === id
    );
    this.setState({
      currentCocktail: currentCocktail
    });
  };

  componentDidMount() {
    fetch("https://react-boozer-backend.herokuapp.com/api/v1/cocktails")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          allCocktails: data,
          currentCocktail: data[0]
        });
        console.log(this.state.currentCocktail);
      });
    fetch("https://react-boozer-backend.herokuapp.com/api/v1/ingredients")
      .then(response => response.json())
      .then(data => {
        this.setState({
          allIngredients: data
        });
      });
    fetch("https://react-boozer-backend.herokuapp.com/api/v1/proportions")
      .then(response => response.json())
      .then(data => {
        this.setState({
          allProportions: data
        });
      });
  }

  render() {
    return (
      <div>
        <Form />

        <CocktailsContainer
          currentCocktail={this.state.currentCocktail}
          allCocktails={this.state.allCocktails}
          handleCocktailClick={this.handleCocktailClick}
        />
      </div>
    );
  }
}

export default App;
