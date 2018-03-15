import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import indexReducer from './ducks/indexReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    indexReducer,composeEnhancers(applyMiddleware(promiseMiddleware()))
  );

export default store;