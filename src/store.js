import { createStore, combineReducers } from 'redux';
import user from './ducks/user';
import cart from './ducks/cart';
import inventory from './ducks/inventory';


const store = createStore(
    combineReducers({user,cart,inventory}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;