const uuidv1 = require("uuid/v1");

const createCart = (req, res) => {
  !req.session.cart ? (req.session.cart = []) : req.session.cart;
  res.status(200).json(req.session.cart);
};
const addToCart = (req, res) => {
  const { itemName, type, price, size, imgUrl, id } = req.body.props;
  req.session.cart === [{ price: 0 }]
    ? (req.session.cart = [{ itemName, type, price, size, imgUrl, id }])
    : req.session.cart.push({ itemName, type, price, size, imgUrl, id });
  res.status(200).json(req.session.cart);
};
const removeFromCart = (req, res) => {
  let newCart = req.session.cart.filter(
    item => item.id !== Number(req.params.id)
  );
  req.session.cart = newCart;
  res.status(200).json(req.session.cart);
};
const deleteCart = (req, res) => {
  let newCart = [];
  req.session.cart = newCart;
  res.status(200).json(req.session.cart);
};
const createOrder = (req, res) => {
  const dbInstance = req.app.get("db");
  let orderNum = uuidv1();
  let insertItems = req.body.map(item => item.id);
  function insertLines() {
    insertItems.forEach(item => {
      dbInstance.createOrderLine(orderNum, item);
    });
    orderNum++;
  }
  return insertLines();
};
module.exports = {
  createCart,
  addToCart,
  removeFromCart,
  deleteCart,
  createOrder
};
