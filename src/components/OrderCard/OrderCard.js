import React, { Component } from 'react';
import './OrderCard.css';
import rose from '../../assets/rose.png'

class OrderCard extends Component {
    render() {
        return (
            <div className='orderCardContainer'>
                <div className='orderImg'><img src={rose} alt=""/></div>
                <div className='cartDescription'>
                    <div className='cartItemName'>{this.props.itemName?this.props.itemName:"Something Good"}</div>
                    <div className='cartItemDesc'>{this.props.itemDesc?this.props.itemDesc:"here's what this thing is"}</div>
                </div>
                <div className='cartItemPrice'>{this.props.itemPrice?this.props.itemPrice:"$00"}</div>
                <div className='removeFromCart'> remove </div>
            </div>
        );
    }
}

export default OrderCard;