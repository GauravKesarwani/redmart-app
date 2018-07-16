import * as ActionTypes from '../actions/cart';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_SUCCESS:
      return action.cart;
    case ActionTypes.FETCH_CART_SUCCESS:
      return action.cart;
    default:
      return state;
  }
}
