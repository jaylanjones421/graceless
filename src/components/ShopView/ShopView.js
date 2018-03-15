import axios from 'axios';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './ShopView.css';
import { setInventory, setViewItem } from "../../ducks/inventory";
import ItemCard from '../ItemCard/ItemCard';


class ShopView extends Component {
    constructor(props){
        super(props);
    }
    //componentDidMount to set inventory
   componentDidMount(){
        axios.get('/api/inventory').then(res=>{
            console.log(res.data);
            this.props.setInventory(res.data);
            this.props.setFeatured(res.data);
        }).catch(console.log)
    }
    render() {
        //dynamically render item cards
        
        /*id: 8,
    itemName: '70\'s Fur Coat',
    type: 'Outerwear',
    price: 60,
    size: 'M',
    description */
console.log(this.props)
        let shopItems = this.props.inventory.inventory.map((item,i)=>(
             <div key={i}><ItemCard  itemName={item.itemName} type={item.type} price={item.price} size={item.size} imgUrl={item.imgUrl} id={item.id} description={item.description} /></div>
        ));
        return (
            <div className='shopContainer'>
                <div className='lazyDiv' description='i make it so that the navbar/footer doesnt cover anything'></div>
                <h2>Shop</h2>
                <div className='filterContainer'> 
                    <select className='filterbb' name="filterSearch" id="">
                        <option value="">Filter</option>
                        <option value="tops">Tops</option>
                        <option value="outerwear">Outerwear</option>
                        <option value="bottoms">Bottoms</option>
                        <option value="shoes">Shoes</option>
                    </select>
                </div>
                <div className='shopItems'>
               {shopItems}
               

                </div>
                <div className='lazyDiv' description='i make it so that the navbar/footer doesnt cover anything'></div>
            </div>
        );
    }
}

const mapStateToProps = state => state;


export default withRouter(connect(mapStateToProps, { setInventory, setViewItem })(ShopView));