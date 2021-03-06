import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './../Reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
}

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;