import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { setCart, addToCart } from "../../ducks/cart";
import "./ItemView.css";

class ItemView extends Component {
  constructor(props) {
    super(props);
  }
  notify = str => toast(str);

  handleAddToCart(props) {
    this.notify(`You have added ${props.itemName} to the cart!`);
    //session add to cart
    axios.put("/api/cart/addtocart", { props });
  }
  addToCart() {
    axios.post("/api/cart/addtocart").then();
  }

  render() {
    console.log(this.props);
    return (
      <div className="itemViewContainer">
        <ToastContainer autoClose={1000} />
        <div className="itemImg">
          <img
            src={
              this.props.inventory.viewItem.imgUrl
                ? this.props.inventory.viewItem.imgUrl
                : ""
            }
            alt=""
          />
        </div>
        <div className="itemLeft">
          <div className="fullDescription">
            <div className="itemTitle">
              {this.props.inventory.viewItem.itemName
                ? this.props.inventory.viewItem.itemName
                : "filler"}
            </div>
            <div className="itemSize">
              {this.props.inventory.viewItem.size
                ? `Size: ${this.props.inventory.viewItem.size}`
                : "size"}
            </div>
            <div className="itemDesc">
              {this.props.inventory.viewItem.description
                ? this.props.inventory.viewItem.description
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error praesentium, voluptate doloremque reprehenderit nulla soluta odio esse numquam ad obcaecati in! Eos, placeat impedit dignissimos fugiat modi cum aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error praesentium, voluptate doloremque reprehenderit nulla soluta odio esse numquam ad obcaecati in! Eos, placeat impedit dignissimos fugiat modi cum aliquam!"}
            </div>
            <div className="itemPrice">
              {this.props.inventory.viewItem.price
                ? `$${this.props.inventory.viewItem.price}`
                : "$49.99"}
            </div>
          </div>
          <button
            className="addToCart"
            onClick={() => this.handleAddToCart(this.props.inventory.viewItem)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, { setCart, addToCart })(ItemView)
);
