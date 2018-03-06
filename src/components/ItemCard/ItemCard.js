import React, { Component } from 'react';
import './ItemCard.css'

class ItemCard extends Component {
    render() {
        const style = {
            background:  `url(${this.props.imgURL})`,
            backgroundSize: "cover",
            backgroundPosition:'center',
            height: '450px',
            width: '300px',
        }
        console.log(this.props.imgURL)
        return (
            <div style={style} className='itemContainer'>
                 <div className="hoverContent">
                 <div className='hoverOverlay'>
                    <div className='itemName'>
                        {this.props.itemName}
                    </div>
                    <div className="itemLink">
                        <a href={this.props.path}>See More</a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemCard;