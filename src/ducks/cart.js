//initial state
const initialState ={
    cart:[],
    total:0
};

//constststs
const ADD_TO_CART='ADD_TO_CART';
const DELETE_FROM_CART='DELETE_FROM_CART';
const UPDATE_TOTAL='UPDATE_TOTAL';

//action creators
export function addToCart(item){
    return{
        type:ADD_TO_CART,
        payload:item
    }
}
export function deleteFromCart(itemID){
    return{
        type:DELETE_FROM_CART,
        payload:itemID
    }
}
export function updateTotal(amount){
    return{
        type:UPDATE_TOTAL,
        payload:amount
    }
}

//the reducer
export default function cart(state=initialState,action){
    let {payload,type}= action;
    switch(type){
        case ADD_TO_CART:
            return Object.assign({},state,{
                cart:[...state.cart,payload]
            });
        case DELETE_FROM_CART:
            return Object.assign({},state,{
                cart: state.cart.filter(id=>id===payload)
            })
        default:
            return state;
    }
}