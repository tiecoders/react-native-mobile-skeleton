import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import coreReducer from '../reducers';
import sagas from '../sagas';

import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

const enhancers = [];

const middlewares = [ thunk, promise, sagaMiddleware, logger ];

enhancers.push(applyMiddleware(...middlewares));

typeof window !== 'undefined' && window.devToolsExtension
    ? enhancers.push(window.devToolsExtension())
    : enhancers.push(x => x);

const store = createStore(coreReducer, compose(...enhancers));

sagaMiddleware.run(sagas);

export default store;