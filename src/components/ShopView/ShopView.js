import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./ShopView.css";
import { setInventory, setViewItem } from "../../ducks/inventory";
import ItemCard from "../ItemCard/ItemCard";

class ShopView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopitems: []
    };
  }
  //componentDidMount to set inventory
  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(res => {
        this.props.setInventory(res.data);
      })
      .catch(console.log);
    axios.post("/api/cart/createcart");
  }
  filterItems(type) {
    axios.get(`/api/inventory/${type}`).then(res => {
      this.setState({
        shopitems: res.data
      });
    });
  }
  render() {
    //dynamically render item cards

    /*id: 8,
    itemName: '70\'s Fur Coat',
    type: 'Outerwear',
    price: 60,
    size: 'M',
    description */
    let shopItems =
      this.state.shopitems.length < 1
        ? this.props.inventory.inventory.map((item, i) => (
            <div key={i}>
              <ItemCard
                itemName={item.itemName}
                type={item.type}
                price={item.price}
                size={item.size}
                imgUrl={item.imgUrl}
                id={item.id}
                description={item.description}
              />
            </div>
          ))
        : this.state.shopitems.map((item, i) => (
            <div key={i}>
              <ItemCard
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
      <div className="shopContainer">
        <div
          className="lazyDiv"
          description="i make it so that the navbar/footer doesnt cover anything"
        />
        <h2>Shop</h2>
        <div className="filterContainer">
          <select
            onChange={e => this.filterItems(e.target.value)}
            className="filterbb"
            name="filterSearch"
            id=""
          >
            <option value="">All Products</option>
            <option value="Top">Tops</option>
            <option value="Outerwear">Outerwear</option>
            <option value="Bottom">Bottoms</option>
          </select>
        </div>
        <div className="shopItems">{shopItems}</div>
        <div
          className="lazyDiv"
          description="i make it so that the navbar/footer doesnt cover anything"
        />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, { setInventory, setViewItem })(ShopView)
);
