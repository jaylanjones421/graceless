import React, { Component } from "react";
import OrderDetailsCard from "../OrderDetailsCard/OrderDetailsCard";
class OrderDetails extends Component {
  render() {
    /*    let orderItems = this.props.map((item, i) => (
      <div key={i}>
        <OrderDetailsCard
          itemName={item.itemName}
          type={item.type}
          price={item.price}
          size={item.size}
          imgUrl={item.imgUrl}
          id={item.id}
          description={item.description}
        />
      </div>
    )); */
    return (
      <div className="orderDetailsContainer">
        <div>{`Order: ${this.props.orderId || 1234567890}`} </div>
        <OrderDetailsCard />
        <div>{`Total: $${this.props.total || 120}`}</div>
      </div>
    );
  }
}

export default OrderDetails;
