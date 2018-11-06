import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import CocktailDisplay from "./CocktailDisplay";

export default class Cocktail extends React.Component {
  handleClick = id => {
    this.props.handleCocktailClick(this.props.cocktail.id);
  };
  render() {
    return <li onClick={this.handleClick}>{this.props.cocktail.name}</li>;
  }
}
