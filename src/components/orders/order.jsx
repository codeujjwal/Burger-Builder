import React from "react";
import classes from "./order.module.css";

const order = (props) => {
  let ingredients = [];
  for (let ingredient in props.ingredients) {
    ingredients.push({
      name: ingredient,
      amount: props.ingredients[ingredient],
    });
  }

  const displayIngredient = ingredients.map((ig) => (
    <span className={classes.ingredient}>
      {ig.name} : {ig.amount}
    </span>
  ));

  return (
    <div className={classes.order}>
      <h3>Ingredients</h3>
      {displayIngredient}
      <h2>
        price: <strong>{props.price} Rs</strong>
      </h2>
    </div>
  );
};

export default order;
