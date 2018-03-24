const Twilio = require("twilio");
const {
  TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID,
  PHONE_NUMBER
} = require(`../../config.js`);
const twilio = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

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
  },
  sendOrder: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .setOrderStatus(req.params.id)
      .then(order => {
        res.status(200).json(order);
      })
      .catch(err => console.log(err));
    twilio.messages
      .create({
        to: `+16147694103`,
        from: PHONE_NUMBER,
        body: `Hi Guest, this is a Graceless notification.Thank you for your order! We have packaged and sent your order, order:${req
          .params
          .id}! Be on the lookout and let us know how much you love it :]`
      })
      .then(message => console.log(message.sid))
      .catch(err => console.log(err));
  },
  getSentOrders: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getSentOrders()
      .then(orders => {
        res.status(200).json(orders);
      })
      .catch(err => console.log(err));
  },
  cancelOrder: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .cancelOrder(req.params.id)
      .then(orders => {
        res.status(200).json(orders);
      })
      .catch(err => console.log(err));
    twilio.messages
      .create({
        to: `+16147694103`,
        from: PHONE_NUMBER,
        body: `Hi Guest, this is a Graceless notification. We have cancelled order:${req
          .params.id} per your request`
      })
      .then(message => console.log(message.sid))
      .catch(err => console.log(err));
  }
};
