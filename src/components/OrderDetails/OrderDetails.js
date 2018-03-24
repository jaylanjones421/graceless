import React, { Component } from "react";
import OrderDetailsCard from "../OrderDetailsCard/OrderDetailsCard";
class OrderDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
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
    const sendButtonStyle = {
      fontSize: "1.5em",
      fontWeight: "bold",
      cursor: "pointer"
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
    let sendButton = (
      <div>
        <button
          onClick={() => this.props.action(this.props.orderId)}
          style={sendButtonStyle}
        >
          SEND
        </button>
      </div>
    );
    let orderDeleteButton = (
      <div>
        <button
          onClick={() => this.props.cancelOrder(this.props.orderId)}
          style={sendButtonStyle}
        >
          CANCEL ORDER
        </button>
      </div>
    );

    return (
      <div className="orderDetailsContainer" style={oDCStyle}>
        <div className="orderNum" style={OrderDetailsStyle}>
          {`Order: ${this.props.orderId || 1234567890}`}{" "}
        </div>
        {detailCards}
        <div style={OrderDetailsStyle}>{`Total: $${this.props.total ||
          120}`}</div>
        {this.props.status === "Sent" ? <div /> : orderDeleteButton}
        {this.props.status === "Sent" ? <div /> : sendButton}
      </div>
    );
  }
}

export default OrderDetails;
