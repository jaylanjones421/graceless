const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const massive = require("massive");
const strategy = require(`${__dirname}/strategy.js`);

const { connectionString } = require(`${__dirname}/config.js`);
const ic = require("./controllers/inventoryController/inventoryController");
const cc = require("./controllers/cartController/cartController");
const oc = require("./controllers/orderController/orderController");

const app = express();

app.use(json());
app.use(cors());
app.use(
  session({
    secret: "suh dude",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 2 * 7 * 24 * 60 * 60
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

massive(connectionString)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

passport.serializeUser((user, done) => {
  done(null, {
    id: user.id,
    displayName: user.displayName,
    nickname: user.nickname,
    email: user.email
  });
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

//AUTH0 Login/ User endpoints
app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/login",
    failureFlash: true
  })
);
//NOT SURE ABOUT THIS
app.get("/me", (req, res, next) => {
  if (!req.user) {
    res.redirect("/login");
  } else {
    return res.status("200").send(JSON.stringify(req.user, null, 10));
  }
});

//inventory endpoints////////////////////////////////////////////////////
//read
app.get("/api/inventory", ic.getDB);
//update
//app.put('/api/inventory/:id')
//get iventory by type
app.get("/api/inventory/:inventory_type", ic.getInventoryByType);

//cart endpoints////////////////////////////////////////////////////////

//create session.cart array
app.post("/api/cart/createcart", cc.createCart);
//add item object to session.cart array
app.put("/api/cart/addtocart", cc.addToCart);
//remove item object from session.cart array
app.put("/api/cart/removefromcart/:id", cc.removeFromCart);
//clear item objects from session.cart array
app.delete("/api/cart/deletecart", cc.deleteCart);
//create order!
app.post("/api/cart/createorder", cc.createOrder);

//order endpoints/////////////////////////////////////////////////////////
//get all orders
app.get("/api/orders", oc.getOrders);
//get distinct nums
app.get("/api/orders/orderids", oc.getOrderNums);
//get order by id
app.get("/api/orders/:id", oc.getOrder);

const port = 3001;
app.listen(port, () => {
  console.log(`"Asuh dude" - port ${port}`);
});
