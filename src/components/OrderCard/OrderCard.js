import React, { Component } from 'react';
import './OrderCard.css'

class OrderCard extends Component {
    render() {
        return (
            <div className='orderCardContainer'>
                <div className='orderImg'>{this.props.itemImg?this.props.itemImg:":]"}</div>
                <div className='cartDescription'>
                    <div className='cartItemName'>{this.props.itemName?this.props.itemName:"Something Good"}</div>
                    <div className='cartItemDesc'>{this.props.itemDesc?this.props.itemDesc:"here's what this thing is"}</div>
                </div>
                <select name="quantity" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <div className='removeFromCart'> remove </div>
            </div>
        );
    }
}

export default OrderCard;