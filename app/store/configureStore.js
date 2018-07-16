import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();
const middleware = [thunk, logger];

const finalCreateStore = applyMiddleware(...middleware)(createStore);

const store = finalCreateStore(rootReducer);

export default store;
