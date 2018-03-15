import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addToCart} from '../../ducks/cart'
import './ItemView.css';

class ItemView extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.inventory)
        return (
            <div className='itemViewContainer'>
                <div className='itemImg'>
                    <img src={this.props.inventory.viewItem.imgUrl?this.props.inventory.viewItem.imgUrl:''} alt=""/>
                </div>
                <div className='itemLeft'>
                    <div className="fullDescription">
                        <div className='itemTitle'>{this.props.inventory.viewItem.itemName?this.props.inventory.viewItem.itemName :'filler'}</div>
                        <div className='itemDesc'>{this.props.inventory.viewItem.description?this.props.inventory.viewItem.description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error praesentium, voluptate doloremque reprehenderit nulla soluta odio esse numquam ad obcaecati in! Eos, placeat impedit dignissimos fugiat modi cum aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error praesentium, voluptate doloremque reprehenderit nulla soluta odio esse numquam ad obcaecati in! Eos, placeat impedit dignissimos fugiat modi cum aliquam!'}</div>
                        <div className='itemPrice'>{this.props.inventory.viewItem.price? `$${this.props.inventory.viewItem.price}`:'$49.99'}</div>
                    </div>
                    <button className='addToCart' onClick={()=>addToCart(this.props.inventory.viewItem)/* and add addToCart(item) function from cart recucer*/} >Add to Cart</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;


export default withRouter(connect(mapStateToProps, {addToCart})(ItemView));