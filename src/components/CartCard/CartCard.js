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
          <div className="cartItemName">
            {this.props.itemName ? this.props.itemName : "Something Good"}
          </div>
          <div className="cartItemDesc">
            {this.props.size
              ? `Size: ${this.props.size}`
              : "here's what this thing is"}
          </div>
        </div>
        <div className="cartItemPrice">
          {this.props.price ? `$${this.props.price}` : "$00"}
        </div>
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
