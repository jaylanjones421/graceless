import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './ItemCard.css'

class ItemCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const style = {
            background:  `url(${this.props.imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition:'center',
            height: '450px',
            width: '300px',
        }
        console.log(this.props.imgUrl)
        return (
            <Link to={`/item/${this.props.id}`}>
             <div className='itemContainer' style={{backgroundImage: `url("${this.props.imgUrl}")`, height: 450, width: 300}}
             className='itemContainer'> 
                 <div className="hoverContent">
                 <div className='hoverOverlay'>
                    <div className='itemName'>
                        {this.props.itemName}
                 
                    </div>
                    </div>
                 </div> 
            </div>
            </Link>
            
        );
    }
}

export default ItemCard;