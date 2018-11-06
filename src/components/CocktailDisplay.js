import React from 'react'

const CocktailDisplay = (props) => {

  return (
    <div id="cocktail-display">
    <h1>{props.currentCocktail.name}</h1>
    <h3>{props.currentCocktail.description}</h3>
    <p>{props.currentCocktail.instructions}</p>
    </div>
  )
}

export default CocktailDisplay
