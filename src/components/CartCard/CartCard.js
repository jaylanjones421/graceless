import React, { Component } from "react";
import axios from "axios";
import "./CartCard.css";
import rose from "../../assets/rose.png";

class CartCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="CartCardContainer">
        <div className="orderImg">
          <img src={rose} alt="" />
        </div>
        <div className="cartDescription">
          <div className="cartItemName">{this.props.itemName}</div>
          <div className="cartItemDesc">{this.props.size}</div>
        </div>
        <div className="cartItemPrice">{`$${this.props.price}`}</div>
        <button
          onClick={() => this.props.action(this.props)}
          className="removeFromCart"
        >
          {" "}
          remove{" "}
        </button>
      </div>
    );
  }
}

export default CartCard;
