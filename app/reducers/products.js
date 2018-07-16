import * as ActionTypes from '../actions/products';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS_SUCCESS:
      return action.products;
    default:
      return state;
  }
}
