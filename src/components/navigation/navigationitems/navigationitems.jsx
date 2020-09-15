import React from "react";
import classes from "./navigationitems.module.css";
import Navigationitem from "./navigationitem/navigationitem";
import { connect } from "react-redux";
import * as actionTypes from "../../../redux/action";

const navigationitems = (props) => {
  return (
    <ul className={classes.navitems}>
      <Navigationitem link="/" exact>
        Burger Builder
      </Navigationitem>
      <Navigationitem link="/orders">Orders</Navigationitem>
      {props.user ? (
        <a href onClick={props.logout} className={classes.span}>
          Log Out
        </a>
      ) : (
        <Navigationitem link="/Login">Log In</Navigationitem>
      )}
    </ul>
  );
};

const mapstate = (state) => {
  return {
    user: state.user,
  };
};
const mapdispatch = (dispatch) => {
  return {
    logout: () => {
      dispatch({ type: actionTypes.USER_DEL });
    },
  };
};

export default connect(mapstate, mapdispatch)(navigationitems);
