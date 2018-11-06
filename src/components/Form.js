import React, { Component } from "react";
import NewIngredient from "./NewIngredient.js";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      ingredientsToAdd: [],
      ProportionIndex: 0,
      Name: "",
      Description: "",
      Instructions: "",
      Proportions: [
        {
          IngredientName: "",
          Quantity: ""
        }
      ]
    };
  }

  handleName = e => {
    this.setState({
      Name: e.target.value
    });
  };

  handleDescription = e => {
    this.setState({
      Description: e.target.value
    });
  };

  handleInstructions = e => {
    this.setState({
      Instructions: e.target.value
    });
  };

  handleProportions = e => {};

  handleIngredientName = e => {
    let updateProportions = this.state.Proportions;
    updateProportions[this.state.ProportionIndex]["IngredientName"] =
      e.target.value;
    this.setState({
      Proportions: updateProportions
    });
  };

  handleIngredientQuantity = e => {
    let updateProportions = this.state.Proportions;
    updateProportions[this.state.ProportionIndex]["Quantity"] = e.target.value;
    this.setState({
      Proportions: updateProportions
    });
  };

  incrementIndex = event => {
    event.preventDefault();
    let emptyIngredient = { IngredientName: "", Quantity: "" };
    this.setState({
      ProportionIndex: this.state.ProportionIndex + 1,
      Proportions: [...this.state.Proportions, emptyIngredient]
    });
  };

  render() {
    return (
      <form>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input onChange={this.handleName} type="text" />

        <p>Description</p>
        <input onChange={this.handleDescription} type="text" />

        <p>Instructions</p>
        <input onChange={this.handleInstructions} type="text" />

        <h3>Proportions</h3>
        <div className="container">
          <p>
            Ingredient Name<br />
            <input onChange={this.handleIngredientName} type="text" />
          </p>

          <p>
            Quantity<br />
            <input onChange={this.handleIngredientQuantity} type="text" />
          </p>
        </div>

        <p>
          <button onClick={this.incrementIndex}> + </button>
          {this.state.Proportions.map(ingredient => {
            <p> hi </p>;
          })}
        </p>

        <input type="submit" />
      </form>
    );
  }
}

export default Form;
