import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middlewares = [applyMiddleware(thunk)];

const store = createStore(rootReducer, compose(...middlewares));

export default store;
