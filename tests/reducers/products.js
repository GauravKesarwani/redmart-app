import { fetchProducts } from '../../app/reducers/products';
import * as ActionTypes from '../../app/actions/products';
import { products } from '../../app/data/products.json';

const startState = [];

const finalState = fetchProducts(state, { type: ActionTypes.FETCH_PRODUCTS_SUCCESS, products });

expect(finalState).toEqual(products);
