module.exports = {
  getOrders: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getAllOrders()
      .then(orders => {
        res.status(200).json(orders);
      })
      .catch(err => console.log(err));
  },
  getOrderNums: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getDistinctOrderNumbers()
      .then(nums => {
        res.status(200).json(nums);
      })
      .catch(err => console.log(err));
  },
  getOrder: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getOrder(req.params.id)
      .then(order => {
        res.status(200).json(order);
      })
      .catch(err => console.log(err));
  }
};
