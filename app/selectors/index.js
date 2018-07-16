import { createSelector } from 'reselect';

export const getProducts = state => state.products;
export const getCartInfo = state => state.cart;

export const getProductsInCart = createSelector(
  getProducts, getCartInfo,
  (products, cart) => {
    return Object.keys(cart).map(productId => products.find(
      product => parseInt(product.id, 10) === parseInt(productId, 10),
    ))
  },
);
