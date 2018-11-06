import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {
  render(){
    return (
      <div id="cocktail-list">
      {
        this.props.allCocktails.map(cocktail => {
          return <Cocktail handleCocktailClick={this.props.handleCocktailClick} key={cocktail.id} cocktail={cocktail} />
        })
      }
      </div>
    )
  }
}

export default CocktailsList
