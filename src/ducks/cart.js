//initial state
const initialState = {
  total: 0
};

//constststs
const SET_CART = "SET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const UPDATE_TOTAL = "UPDATE_TOTAL";

//action creators
export function setCart(cart) {
  return {
    type: ADD_TO_CART,
    payload: cart
  };
}
export function addToCart(cart) {
  return {
    type: ADD_TO_CART,
    payload: cart
  };
}
export function deleteFromCart(itemID) {
  return {
    type: DELETE_FROM_CART,
    payload: itemID
  };
}
export function updateTotal(cart) {
  return {
    type: UPDATE_TOTAL,
    payload: cart
  };
}

//the reducer
export default function cart(state = initialState, action) {
  let { payload, type } = action;
  switch (type) {
    case UPDATE_TOTAL:
      return Object.assign({}, state, {
        total: payload
      });
    case DELETE_FROM_CART:
      return Object.assign({}, state, {
        cart: state.cart.filter(id => id === payload)
      });
    default:
      return state;
  }
}
