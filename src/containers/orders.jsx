import React, { Component } from "react";
import Order from "../components/orders/order";
import classes from "./orders.module.css";
import axiosorders from "../axiosorders";
import { connect } from "react-redux";

class orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axiosorders
      .get("/orders.json")
      .then((rsp) => {
        const fetchedOrders = [];
        console.log(this.props.user);
        for (let key in rsp.data) {
          if (rsp.data[key].id === this.props.user?.uid) {
            fetchedOrders.push({
              ...rsp.data[key],
              id: key,
            });
          }
          this.setState({ loading: false, orders: fetchedOrders });
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className={classes.order}>
        {this.props.user ? (
          <div className={classes.details}>
            <h1>Your Orders</h1>
            <p>E-mail Id : {this.props.user?.email}</p>
          </div>
        ) : (
          <div className={classes.details}>
            <h1>Log In To See Your Orders</h1>
          </div>
        )}
        {this.props.user
          ? this.state.orders.map((order) => (
              <Order
                ingredients={order.ingredients}
                key={order.id}
                price={order.price}
              />
            ))
          : null}
      </div>
    );
  }
}

const mapstate = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapstate)(orders);
