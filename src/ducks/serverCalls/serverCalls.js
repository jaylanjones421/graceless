import axios from 'axios';

const serverCalls ={
 getInventory: function(){
    axios
    .get('/api/inventory').then(res=>{
    return res.data
    }).catch(console.log)
}
,
decreaseStock: function (){
    axios
    .put('/api/inventory/itemID').then(res=>{
    return res.data
    }).catch(console.log)
},

//user reducer
getUser: function (){
    axios
    .get("/api/me")
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(console.log)
}
}

export default serverCalls;