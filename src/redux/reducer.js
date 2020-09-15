import * as actionTypes from "./action.js";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalprice: 20,
  user: null,
};

const prices = {
  salad: 10,
  bacon: 20,
  cheese: 20,
  meat: 30,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BURGER:
      return {
        ...state,
        ingredients: {
          salad: 0,
          bacon: 0,
          cheese: 0,
          meat: 0,
        },
        totalprice: 20,
      };
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        totalprice: state.totalprice + prices[action.ingredient],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        totalprice: state.totalprice - prices[action.ingredient],
      };
    case actionTypes.USER:
      return {
        ...state,
        user: action.userinfo,
      };
    case actionTypes.USER_DEL:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
