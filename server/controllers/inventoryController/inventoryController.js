// make the db call here
module.exports={
getDB: (req,res)=>{
    const dbInstance = req.app.get('db');
    dbInstance.getInventory()
    .then(item=>res.status(200).json(item))
    .catch((err)=>console.log(err))
}
}


