import React, { Component } from "react";
import CartCard from "../CartCard/CartCard";
import Checkout from "../Checkout/Checkout";
import axios from "axios";

import "./CartView.css";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/lib/fa";

class CartView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      total: 0
    };
  }
  componentDidMount() {
    axios.post("/api/cart/createcart").then(res => {
      this.setState({
        cart: res.data,
        total: res.data.reduce((acc, cv) => acc + cv.price, 0)
      });
    });
  }
  removeFromCart(item) {
    axios.put(`/api/cart/removefromcart/${item.id}`).then(res => {
      console.log(`REMOVE FROM CART FIRED${res.data}`);
      this.setState({
        cart: res.data,
        total: res.data.reduce((acc, cv) => acc + cv.price, 0)
      });
    });
  }

  deleteCart() {
    axios.delete("/api/cart/deletecart").then(res => {
      this.setState({
        cart: res.data,
        total: res.data.reduce((acc, cv) => acc + cv.price, 0)
      });
      console.log(`CART CLEARED${res.data}`);
    });
  }
  createOrder() {
    axios.post("/api/cart/createorder", this.state.cart);
    axios.post("/api/twilio/orderconfirm");
  }
  render() {
    console.log(this.state);
    let cartItems = this.state.cart.map((item, i) => (
      <div key={i}>
        <CartCard
          itemName={item.itemName}
          type={item.type}
          price={item.price}
          size={item.size}
          imgUrl={item.imgUrl}
          id={item.id}
          description={item.description}
          action={this.removeFromCart.bind(this)}
        />
      </div>
    ));
    let clearCart =
      this.state.cart.length > 0 ? (
        <button onClick={() => this.deleteCart()} className="clearCart">
          Clear Cart
        </button>
      ) : (
        <div />
      );
    let cartTotal =
      this.state.cart.length > 0 ? (
        <div className="cartTotal">{`TOTAL: $${this.state.total}`}</div>
      ) : (
        <div className="cartTotal" />
      );

    let checkOutButton =
      this.state.total > 0 ? (
        <button
          onClick={() => {
            alert(
              `Your order with ${this.state.cart.length} items totaling $${this
                .state
                .total} will be shipped in 2 business days. Thank you for supporting Graceless!`
            );
            this.createOrder();
            this.deleteCart();
          }}
          className="checkOutButton"
        >
          Check Out
        </button>
      ) : (
        <div className="checkOutButton" />
      );
    return (
      <div className="cartContainer">
        <div className="lazyDiv" />
        <h2>Cart</h2>
        <div className="top">
          <div className="cartDetails">
            {/*this will have generated ordercards*/}
            {cartItems}
            {}
          </div>
        </div>
        <div className="bottom">
          <div className="cartTotal">{cartTotal}</div>
          <div className="cartButtons">
            {clearCart}
            {checkOutButton}
          </div>

          <div className="thanks">
            <FaQuoteLeft />
            <div>
              This is something that says how much it means to us that you are
              making a home for our vintage finds, we hope you love it as much
              as we do. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Et pariatur fugit, cum inventore voluptatibus perspiciatis
              quae nulla, eaque cupiditate, quasi qui id mollitia magni ipsa
              ducimus neque animi iste repellat?
            </div>
            <FaQuoteRight />
          </div>
        </div>
        <div className="lazyDiv" />
      </div>
    );
  }
}

export default CartView;
