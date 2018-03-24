import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import UserView from "./components/UserView/UserView";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
