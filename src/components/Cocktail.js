import React from 'react'
import  { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import CocktailDisplay from './CocktailDisplay'

const Cocktail = (props) => {
  return (
      <li onClick={props.handleCocktailClick}
      >

      {props.cocktail.name}</li>
  )
}

export default Cocktail
