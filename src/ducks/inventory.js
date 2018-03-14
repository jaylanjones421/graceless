import serverCalls from "./serverCalls/serverCalls";

//initial state
const initialState = {
  inventory: ["this is state, amirite?"]
};

//constststs
const SET_INVENTORY = "SET_INVENTORY";
const DECREASE_STOCK = "DECREASE_STOCK"; //change availability when item is added to order
//const INCREASE_STOCK = "INCREASE_STOCK"; // gonna wait to use this until i add admin page to add items

//action creators
export function setInventory(inventory) {
  return {
    type: SET_INVENTORY,
    payload: inventory
  }
}
export function removeStock(itemID) {
  return {
    type: DECREASE_STOCK,
    payload: serverCalls.decreaseStock()
  }
}

//the reducer
export default function cart(state = initialState, action) {
  let { payload, type } = action;
  switch (type) {
    case SET_INVENTORY: 
      return Object.assign({}, state, {
        inventory: payload
    })
    // GOTTA SEE HOW I SHOULD DEAL WITH THIS
    default:
      return state;
  }
}
