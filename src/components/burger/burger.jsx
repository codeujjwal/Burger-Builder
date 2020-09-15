import React from "react";
import classes from "./burger.module.css";
import Ingredients from "./ingredients/ingredients";
import { withRouter } from 'react-router-dom'


const Burger = (props) => {
  let transformedingredients = Object.keys(props.ingredients).map((igkey) => {
    return [...Array(props.ingredients[igkey])].map((_, i) => (
      <Ingredients key={igkey + i} type={igkey} />
    ));
  }).reduce((arr, el) => {
      return arr.concat(el)
  },[]);

if(transformedingredients.length === 0){
    transformedingredients = <p>Please start adding ingredients</p>
}

return <div className={classes.burger}>
      <Ingredients type={'bread-top'}/>
      {transformedingredients}
      <Ingredients type={'bread-bottom'}/>

      </div>;
};

export default withRouter(Burger);
