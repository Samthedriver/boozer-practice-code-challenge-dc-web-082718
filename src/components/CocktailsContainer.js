import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {

  render(){
    return (
      <div className="container">
      {
        this.props.currentCocktail ?
          <CocktailDisplay currentCocktail={this.props.currentCocktail} />
          : null

        }

      <CocktailsList handleCocktailClick={this.props.handleCocktailClick} allCocktails={this.props.allCocktails} />
      </div>
    )
  }
}

export default CocktailsContainer
