//  import { setErrorFlag } from './error';

import data from '../data/products.json';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

function mockfetchDataCall() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 300);
  });
}

export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PRODUCTS });

      //  const responseData = await fetch('/api/products', { method: 'GET' });
      const responseData = await mockfetchDataCall();

      if (responseData.error) {
        dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          error: `error from API: ${responseData.message}`,
        });
        //  dispatch(setErrorFlag(true));
      } else {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          products: responseData.products,
        });
        //  dispatch(setErrorFlag(false));
      }
    } catch (e) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, error: e });
    }
  };
}
