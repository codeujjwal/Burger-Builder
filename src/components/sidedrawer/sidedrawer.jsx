import React from "react";
import classes from "./sidedrawer.module.css";
import Navigationitems from "../navigation/navigationitems/navigationitems";
import burgerlogo from "../../assets/burger-logo.png";
import Backdrop from "../UI/backdrop/backdrop";

const sidedrawer = (props) => {
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div
        onClick={props.closed}
        className={classes.sidedrawer}
        style={{
          transform: props.open ? "translateX(0%)" : "translateX(-100%)",
        }}
      >
        <div className={classes.logo}>
          <img src={burgerlogo} alt="my burger" />
        </div>
        <nav>
          <Navigationitems />
        </nav>
        <div className={classes.about}>
          <p>About website</p>
        </div>
      </div>
    </div>
  );
};

export default sidedrawer;
