import React, { Component } from "react";
import OrderDetailsCard from "../OrderDetailsCard/OrderDetailsCard";
class OrderDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const oDCStyle = {
      height: "800px",
      width: "400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    };
    const OrderDetailsStyle = {
      fontSize: "1.5em",
      fontWeight: "bold"
    };

    let detailCards = this.props.order.map((item, i) => (
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
    ));
    return (
      <div className="orderDetailsContainer" style={oDCStyle}>
        <div className="orderNum" style={OrderDetailsStyle}>
          {`Order: ${this.props.orderId || 1234567890}`}{" "}
        </div>
        {detailCards}
        <div style={OrderDetailsStyle}>{`Total: $${this.props.total ||
          120}`}</div>
      </div>
    );
  }
}

export default OrderDetails;
