import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import indexReducer from './ducks/indexReducer';



const store = createStore(
    indexReducer,applyMiddleware(promiseMiddleware())
  );

export default store;