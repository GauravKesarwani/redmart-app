import { db } from '../lib/utils';
import { user } from '../config/appConfig';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
export const REMOVE_PRODUCT_FAILURE = 'REMOVE_PRODUCT_FAILURE';
export const FETCH_CART = 'FETCH_CART';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';

export function addProductToCart(productId) {
  return (dispatch) => {
    dispatch({ type: ADD_PRODUCT });

    const cart = db.get(user);

    if (cart[productId]) {
      cart[productId] += 1;
    } else {
      cart[productId] = 1;
    }

    db.set(user, cart);

    dispatch({ type: ADD_PRODUCT_SUCCESS, cart });
  };
}

export function fetchUserCart() {
  return (dispatch) => {
    dispatch({ type: FETCH_CART });

    const cart = db.get(user);

    dispatch({ type: FETCH_CART_SUCCESS, cart });
  }
}
