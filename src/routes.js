import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeView from "./components/HomeView/HomeView";
import AboutView from "./components/AboutView/AboutView";
import ItemView from "./components/ItemView/ItemView";
import ShopView from "./components/ShopView/ShopView";
import CartView from "./components/CartView/CartView";
import UserView from "./components/UserView/UserView";

export default (
  <Switch>
    <Route exact path="/" component={HomeView} />
    <Route exact path="/about" component={AboutView} />
    <Route path="/shop" component={ShopView} />
    <Route path="/cart" component={CartView} />
    <Route path="/item/:id" component={ItemView} />
    <Route path="/user" component={UserView} />
  </Switch>
);
