import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
        return (
            <Link to='/item/:id'><div style={style} className='itemContainer'>
                 <div className="hoverContent">
                 <div className='hoverOverlay'>
                    <div className='itemName'>
                        {this.props.itemName}
                 
                    </div>
                    </div>
                </div>
            </div></Link>
        );
    }
}

export default ItemCard;