import React, { Component } from 'react';
import './ItemView.css';
import overalls from '../../assets/david-yanutama-470460-unsplash.jpg'

class ItemView extends Component {
    render() {
        return (
            <div className='itemViewContainer'>
                <div className='itemImg'>
                    <img src={overalls} alt=""/>
                </div>
                <div className='itemLeft'>
                    <div className="fullDescription">
                        <div className='itemTitle'>Classic Denim Overalls</div>
                        <div className='itemDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error praesentium, voluptate doloremque reprehenderit nulla soluta odio esse numquam ad obcaecati in! Eos, placeat impedit dignissimos fugiat modi cum aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error praesentium, voluptate doloremque reprehenderit nulla soluta odio esse numquam ad obcaecati in! Eos, placeat impedit dignissimos fugiat modi cum aliquam! </div>
                    </div>
                    <div className='addToCart'>Add to Cart</div>
                </div>
            </div>
        );
    }
}

export default ItemView;