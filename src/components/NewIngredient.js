import React from "react";

export default class NewIngredient extends React.Component {
  render() {
    return (
      <div>
        <p>
          Ingredient Name<br />
          <input onChange={this.handleIngredientName} type="text" />
        </p>

        <p>
          Quantity<br />
          <input onChange={this.handleIngredientQuantity} type="text" />
        </p>
      </div>
    );
  }
}
