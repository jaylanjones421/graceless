import React, { Component } from "react";
import "./OrderCard.css";

class OrderCard extends Component {
  render() {
    return (
      <div className="orderCardContainer">
        <div className="orderCardTop">
          <h4
            onClick={() => this.props.action(this.props.orderId)}
          >{`ORDER: ${this.props.orderId || 1234567890}`}</h4>
        </div>
        <div className="orderCardBottom">
          <div>{`Items: ${this.props.items || 4}`}</div>
          <div>{`Total: $${this.props.total || 120}`}</div>
          <div>{`Status: ${this.props.status || "Processing"}`}</div>
        </div>
      </div>
    );
  }
}

export default OrderCard;
