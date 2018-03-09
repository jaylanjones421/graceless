import axios from 'axios';

//initial state
const initialState ={
    inventory:[]
}

//constststs
const GET_INVENTORY='GET_INVENTORY';
const DECREASE_STOCK='DECREASE_STOCK';//change availability when item is added to order
const INCREASE_STOCK='INCREASE_STOCK' // gonna wait to use this until i add admin page to add items 

//action creators
export function getInventory(){
    return{
        type:GET_INVENTORY,
        payload:{/*
        axios.get(/api/inventory).then(res=>{
            return res.data
        }).catch(console.log)
        */}
    }
}
export function removeStock(itemID){
    return{
        type:DECREASE_STOCK,
        payload:{/*
            axios.put(/api/inventory/itemID).then(res=>{
                return res.data
            }).catch(console.log)
            */}
    }
}

//the reducer
export default function cart(state=initialState,action){
    let {payload,type}= action;
    switch(type){
        case GET_INVENTORY:
            return Object.assign({},state,{
                inventory:payload
            });
            // GOTTA SEE HOW I SHOULD DEAL WITH THIS 
        default:
            return state;
    }
}