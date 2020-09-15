import React, { Component } from "react";
import classes from "./contactdata.module.css";
import axiosorders from "../../../axiosorders";
import { connect } from "react-redux";

class contactdata extends Component {
  state = {
    name: "",
    email: "",
    state: "",
    city: "",
    pincode: null,
    payment: "Cash On Delivery",
    id: "",
  };

  inputHandler = (event) => {
    const val = event.target.value;
    const nam = event.target.name;
    this.setState({ [nam]: val });
  };

  selected = (e) => {
    this.setState({ payment: e.target.value });
  };

  ordered = (event) => {
    event.preventDefault();

    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      customer: this.state,
      id: this.props.user.uid,
    };

    axiosorders
      .post("/orders.json", order)
      .then((response) => console.log("done"))
      .catch((error) => console.log(error));

    this.props.history.push("/");
    alert("Thank You For Purchasing");
  };
  render() {
    return (
      <div className={classes.contactdata}>
        <h1>Enter Your Address</h1>
        <form>
          <input
            className={classes.detailsinput}
            type="text"
            name="name"
            value={this.props.user?.displayName}
            placeholder="Your Name"
            onChange={this.inputHandler}
          />
          <input
            className={classes.detailsinput}
            type="email"
            value={this.props.user?.email}
            name="email"
            placeholder="Your Mail"
            onChange={this.inputHandler}
          />
          <input
            className={classes.detailsinput}
            type="text"
            name="state"
            placeholder="Your State"
            onChange={this.inputHandler}
          />
          <input
            className={classes.detailsinput}
            type="text"
            name="city"
            placeholder="Your City"
            onChange={this.inputHandler}
          />{" "}
          <input
            className={classes.detailsinput}
            type="number"
            name="pincode"
            placeholder="Your Pin Code"
            onChange={this.inputHandler}
          />
          <select
            className={classes.detailsinput}
            value={this.state.payment}
            onChange={this.selected}
            name="payment"
          >
            <option value="C.O.D">Cash On Delivery</option>
            <option value="Online Payment">Online Payment</option>
          </select>
          {this.props.user ? (
            <button
              onClick={this.ordered}
              type="submit"
              className={classes.Success}
            >
              ORDER
            </button>
          ) : (
            <p className={classes.request}>Please Login To Place Your Order</p>
          )}
        </form>
      </div>
    );
  }
}

const mapstate = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalprice,
    user: state.user,
  };
};

export default connect(mapstate)(contactdata);
