import {combineReducers} from 'redux';
import cart from './cart';
import inventory from './inventory';
import user from './user';

export default combineReducers({
    cart:cart,
    inventory:inventory,
    user:user
});