import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import filters from './filters';

const appReducer = combineReducers({
  products,
  filters,
  cart,
});

export default appReducer;
