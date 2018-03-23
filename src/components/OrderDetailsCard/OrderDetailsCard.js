import React, { Component } from "react";
import "./OrderDetailsCard.css";
import axios from "axios";
import rose from "../../assets/rose.png";

class OrderDetailsCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="OrderCardContainer">
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
      </div>
    );
  }
}

export default OrderDetailsCard;
