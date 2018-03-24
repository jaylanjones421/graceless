import React, { Component } from "react";
import axios from "axios";
import "./UserVIew.css";
import OrderCard from "../OrderCard/OrderCard.js";
import OrderDetailsCard from "../OrderDetailsCard/OrderDetailsCard";
import OrderDetails from "../OrderDetails/OrderDetails";

class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allOrderDetails: [],
      activeOrders: [],
      pastOrders: [],
      currentOrder: null,
      currentTotal: null,
      currentNumOfItems: null,
      displayName: "Admin"
    };
    this.changeCurrentOrder = this.changeCurrentOrder.bind(this);
    this.changeOrderStatus = this.changeOrderStatus.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
  }
  componentDidMount() {
    axios.get("/api/orders").then(res => {
      this.setState({
        allOrderDetails: res.data
      });
    });
    axios.get("/api/orders/pastorders").then(res => {
      this.setState({
        pastOrders: res.data
      });
    });
    axios.get("/api/orders/orderids").then(res => {
      console.log(res.data);
      this.setState({
        activeOrders: res.data
      });
    });
    axios.get("/api/user").then(res => {
      this.setState({
        displayName: res.data.name
      });
    });
  }
  changeCurrentOrder(item) {
    axios.get(`/api/orders/${item.orderId}`).then(res => {
      this.setState({
        currentOrder: res.data,
        currentTotal: item.total,
        currentNumOfItems: item.items
      });
    });
  }
  exitCurrentOrder() {
    this.setState({
      currentOrder: null
    });
  }
  handleDisplayName(value) {
    this.setState({ displayName: value });
  }
  changeOrderStatus(orderNum) {
    axios.put(`/api/orders/update/${orderNum}`);
  }
  cancelOrder(orderNum) {
    axios.delete(`/api/orders/delete/${orderNum}`);
    this.setState({
      currentOrder: null
    });
  }
  orderTotal = (item, arr) => {
    let total = 0;
    arr
      .map(x => {
        if (x.orderID === item.orderID) {
          total += x.price;
        }
      })
      .reduce((acc, cv) => acc + cv, 0);
    return total;
  };
  numOfItems = (item, arr) => {
    let items = arr.filter(x => x.orderID === item.orderID);
    return items.length;
  };
  render() {
    let userViewRightStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px"
    };
    let activeOrders = this.state.activeOrders.map((item, i) => (
      <div key={i}>
        <OrderCard
          orderId={item.orderID}
          items={this.numOfItems(item, this.state.allOrderDetails)}
          total={this.orderTotal(item, this.state.allOrderDetails)}
          status="Processing"
          action={this.changeCurrentOrder}
          cancelOrder={this.cancelOrder}
        />
      </div>
    ));

    let pastOrders = this.state.pastOrders.map((item, i) => (
      <div key={i}>
        <OrderCard
          orderId={item.orderID}
          items={this.numOfItems(item, this.state.allOrderDetails)}
          total={this.orderTotal(item, this.state.allOrderDetails)}
          status={this.state.pastOrders[0].status}
          action={this.changeCurrentOrder}
        />
      </div>
    ));
    return (
      <div className="userViewContainer">
        <div className="lazyDiv" />
        <div className="orderWrapper">
          <div className="salutations">
            <h2>
              Howdy,{" "}
              <span className="displayName" contentEditable="true">
                {this.state.displayName || "Guest"}
              </span>!
            </h2>
          </div>
          <div className="orderCardWrapper">
            <div className="userViewLeft">
              <div className="userOrderDiv">
                <div className="activeWrapper">
                  <h3>Active Orders</h3>
                  <div className="activeOrders">
                    {/* this is where i'll populate order cards */}
                    {activeOrders}
                  </div>
                </div>
              </div>
              <div className="userOrderDiv">
                <div>
                  <h3>Past Orders</h3>
                  <div className="pastOrders">
                    {/* this is where i'll populate order cards */}
                    {pastOrders}
                  </div>
                </div>
              </div>
            </div>
            <div className="userViewRight" style={userViewRightStyle}>
              {this.state.currentOrder && (
                <OrderDetails
                  order={this.state.currentOrder}
                  orderId={this.state.currentOrder[0].orderID}
                  total={this.state.currentTotal}
                  action={this.changeOrderStatus}
                  status={this.state.currentOrder[0].status}
                  cancelOrder={this.cancelOrder}
                />
              )}
            </div>
          </div>
        </div>
        <div className="lazyDiv" />
      </div>
    );
  }
}

export default UserView;
