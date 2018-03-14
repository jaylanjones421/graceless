import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './ItemView.css';
import overalls from '../../assets/david-yanutama-470460-unsplash.jpg'

class ItemView extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <div className='itemViewContainer'>
                <div className='itemImg'>
                    <img src={this.props.imgUrl?this.props.imgUrl:overalls} alt=""/>
                </div>
                <div className='itemLeft'>
                    <div className="fullDescription">
                        <div className='itemTitle'>{this.props.itemName?this.props.itemName :'filler'}</div>
                        <div className='itemDesc'>{this.props.description?this.props.description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error praesentium, voluptate doloremque reprehenderit nulla soluta odio esse numquam ad obcaecati in! Eos, placeat impedit dignissimos fugiat modi cum aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error praesentium, voluptate doloremque reprehenderit nulla soluta odio esse numquam ad obcaecati in! Eos, placeat impedit dignissimos fugiat modi cum aliquam!'}</div>
                        <div className='itemPrice'>{this.props.price? this.props.price:'$49.99'}</div>
                    </div>
                    <div className='addToCart' onClick={()=>{alert(`you have added to ${this.props.itemName?this.props.itemName :'filler'} the cart`)}/* and add addToCart(item) function from cart recucer*/} >Add to Cart</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state;


export default withRouter(connect(mapStateToProps)(ItemView));