// make the db call here
module.exports = {
  getDB: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getInventory()
      .then(item => res.status(200).json(item))
      .catch(err => console.log(err));
  },
  getInventoryByType: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getInventoryByType(req.params.inventory_type)
      .then(product => res.status(200).json(product))
      .catch(err => console.log(err));
  }
};
