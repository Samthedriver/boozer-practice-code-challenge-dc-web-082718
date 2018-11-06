import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'
import  { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allCocktails: [],
      allIngredients: [],
      allProportions: [],
      currentCocktail: {}
    }
  }

  handleCocktailClick = () => {
    console.log('clicked')
  }

  componentDidMount() {
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/cocktails')
      .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({
            allCocktails: data,
            currentCocktail: data[0]
          })
          console.log(this.state.currentCocktail)
        })
    fetch('https://react-boozer-backend.herokuapp.com/api/v1/ingredients')
    .then(response => response.json())
      .then(data => {

        this.setState({
          allIngredients: data
        })
      })
      fetch('https://react-boozer-backend.herokuapp.com/api/v1/proportions')
      .then(response => response.json())
        .then(data => {

          this.setState({
            allProportions: data
          })
        })

  }

  render() {
    return (
      <CocktailsContainer currentCocktail={this.state.currentCocktail} allCocktails={this.state.allCocktails} handleCocktailClick={this.handleCocktailClick}/>
    );
  }
}

export default App;
