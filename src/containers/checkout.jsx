import React, { Component } from "react";
import CheckoutSummary from "../components/orders/checkoutSummary/checkoutSummary";
import { Route } from "react-router";
import Contactdata from "../components/orders/contactdata/contactdata";
import { connect } from "react-redux";

class checkout extends Component {
  continued = () => {
    this.props.history.push("/checkout/contact-data");
  };
  canceled = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          cancelClicked={this.canceled}
          continueClicked={this.continued}
          ingredients={this.props.ings}
        />
        <Route path="/checkout/contact-data" component={Contactdata} />
      </div>
    );
  }
}

const mapstate = (state) => {
  return {
    ings: state.ingredients,
  };
};

export default connect(mapstate)(checkout);
