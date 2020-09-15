import React, { Component } from "react";
import Burger from "../components/burger/burger";
import BuildControls from "../components/buildcontrols/buildcontrols";
import Modal from "../components/UI/modal/modal";
import Ordersummary from "../components/ordersummary/ordersummary";
import axios from "axios";
import { connect } from "react-redux";
import * as actionTypes from "../redux/action";

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
  };

  componentWillMount() {
    axios
      .get("https://reactburger-ab06a.firebaseio.com/ingredients.json")
      .then((rsp) => {
        this.setState({
          ingredients: rsp.data,
        });
      });
  }

  purchasablehandler = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };
  render() {
    const purchasehandler = () => this.setState({ purchasing: true });
    const modalcacnelhandler = () => this.setState({ purchasing: false });
    const continuepurchasing = () => {
      this.props.history.push("/checkout");
    };

    const disabledinfo = {
      ...this.props.ings,
    };
    for (let key in disabledinfo) {
      disabledinfo[key] = disabledinfo[key] <= 0;
    }

    let burger = null;
    let ordersummary = null;

    if (this.props.ings) {
      burger = (
        <div>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            addingredient={this.props.ingredientAdded}
            removeingredient={this.props.ingredientRemoved}
            price={this.props.price}
            purchasable={this.purchasablehandler(this.props.ings)}
            disabled={disabledinfo}
            ordered={purchasehandler}
          />
        </div>
      );

      ordersummary = (
        <Ordersummary
          ingredients={this.props.ings}
          clicked={modalcacnelhandler}
          continued={continuepurchasing}
          price={this.props.price}
        />
      );
    }

    return (
      <div>
        <Modal show={this.state.purchasing} modalclosed={modalcacnelhandler}>
          {ordersummary}
        </Modal>
        {burger}
      </div>
    );
  }
}

const mapstate = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalprice,
  };
};
const mapdispatch = (dispatch) => {
  return {
    ingredientAdded: (ingname) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredient: ingname }),
    ingredientRemoved: (ingname) =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredient: ingname }),
  };
};

export default connect(mapstate, mapdispatch)(BurgerBuilder);
