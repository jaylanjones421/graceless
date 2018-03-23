import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./ItemCard.css";
import { setViewItem } from "../../ducks/inventory";

class ItemCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      backgroundImage: `url(${this.props.imgUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "450px",
      width: "300px"
    };
    return (
      <Link to={`/item/${this.props.id}`}>
        <div className="itemContainer" style={style} className="itemContainer">
          <div
            className="hoverContent"
            onClick={() => this.props.setViewItem(this.props)}
          >
            <div className="hoverOverlay">
              <div className="itemName">{this.props.itemName}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { setViewItem })(ItemCard));
