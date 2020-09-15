import React from "react";
import Burger from "../../burger/burger";
import classes from "./checkoutSummary.module.css";
import { connect } from "react-redux";

const checkoutSummary = (props) => {
  return (
    <div className={classes.checkoutSummary}>
      <h2>We Hope it tastes well</h2>
      <div className={classes.burger}>
        <Burger ingredients={props.ings} />
      </div>
      <button onClick={props.cancelClicked} className={classes.Danger}>
        Cancel
      </button>
      <button onClick={props.continueClicked} className={classes.Success}>
        Continue
      </button>
    </div>
  );
};

const mapstate = (state) => {
  return {
    ings: state.ingredients,
  };
};

export default connect(mapstate)(checkoutSummary);
