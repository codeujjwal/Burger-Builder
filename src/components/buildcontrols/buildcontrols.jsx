import React from "react";
import classes from "./buildcontrols.module.css";
import Buildcontrol from "./buildcontrol/buildcontrol";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className={classes.buildcontrols_container}>
    <p>
      <strong>Current Price: {props.price}</strong>
    </p>
    {controls.map((cntrl) => (
      <Buildcontrol
        label={cntrl.label}
        key={cntrl.label}
        added={() => {
          props.addingredient(cntrl.type);
        }}
        removed={() => {
          props.removeingredient(cntrl.type);
        }}
        disabled={props.disabled[cntrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
