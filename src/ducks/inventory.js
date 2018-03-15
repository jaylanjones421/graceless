import serverCalls from "./serverCalls/serverCalls";

//initial state
const initialState = {
  inventory: ["this is state, amirite?"],
  viewItem:{},
  featured:[]
};

//constststs
const SET_INVENTORY = "SET_INVENTORY";
const SET_VIEWITEM="SET_VIEWITEM";
const SET_FEATURED="SET_FEATURED";
const DECREASE_STOCK = "DECREASE_STOCK"; //change availability when item is added to order
//const INCREASE_STOCK = "INCREASE_STOCK"; // gonna wait to use this until i add admin page to add items

//action creators
export function setInventory(inventory) {
  return {
    type: SET_INVENTORY,
    payload: inventory
  }
};
export function setViewItem(item) {
  return {
    type: SET_VIEWITEM,
    payload: item
  }
};
export function setFeatured(inventory) {
  return {
    type: SET_FEATURED,
    payload: inventory.slice(0,3)
  }
};
export function removeStock(itemID) {
  return {
    type: DECREASE_STOCK,
    payload: serverCalls.decreaseStock()
  }
};

//the reducer
export default function cart(state = initialState, action) {
  let { payload, type } = action;
  switch (type) {
    case SET_INVENTORY: 
      return Object.assign({}, state, {
        inventory: payload
    });
    case SET_FEATURED: 
    return Object.assign({}, state, {
      featured: payload
  });          
    case SET_VIEWITEM: 
      return Object.assign({}, state, {
      viewItem: payload
  });
    // GOTTA SEE HOW I SHOULD DEAL WITH THIS
    default:
      return state;
  }
}
