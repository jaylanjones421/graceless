import React, { Component } from "react";
import axios from "axios";
import "./UserVIew.css";
import OrderCard from "../OrderCard/OrderCard.js";
import OrderDetailsCard from "../OrderDetailsCard/OrderDetailsCard";

class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allOrderDetails: [],
      activeOrders: [],
      pastOrders: [],
      currentOrder: null,
      displayName: "Guest"
    };
    this.changeCurrentOrder = this.changeCurrentOrder.bind(this);
  }
  componentDidMount() {
    axios.get("/api/orders").then(res => {
      console.log(res.data);
      this.setState({
        allOrderDetails: res.data
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
  changeCurrentOrder(id) {
    axios.get(`/api/orders/${id}`).then(res => {
      this.setState({
        currentOrder: res.data
      });
    });
  }
  handleDisplayName(value) {
    this.setState({ displayName: value });
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
    console.log(this.state.currentOrder);
    let activeOrders = this.state.activeOrders.map((item, i) => (
      <div key={i}>
        <OrderCard
          orderId={item.orderID}
          items={this.numOfItems(item, this.state.allOrderDetails)}
          total={this.orderTotal(item, this.state.allOrderDetails)}
          action={this.changeCurrentOrder}
        />
      </div>
    ));

    /*    let pastOrders = this.props.map((item, i) => (
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
      <div className="userViewContainer">
        <div className="lazyDiv" />
        <div className="orderWrapper">
          <div className="salutations">
            <h2>
              Howdy,{" "}
              <span className="displayName" contentEditable="true">
                {this.props.name || "Guest"}
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
                  </div>
                </div>
              </div>
            </div>
            <div className="userViewRight" />
          </div>
        </div>
        <div className="lazyDiv" />
      </div>
    );
  }
}

export default UserView;
