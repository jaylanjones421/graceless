import axios from 'axios';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom'

import './ShopView.css';
import { setInventory } from "../../ducks/inventory";

import ItemCard from '../ItemCard/ItemCard';
import brownShirt from '../../assets/ao-275953-unsplash.jpg';
import sweater from '../../assets/beth-solano-321063-unsplash.jpg';
import denimJ from '../../assets/toa-heftiba-547030-unsplash.jpg';
import jeans from '../../assets/jamakassi-364678-unsplash.jpg';
import jorts from '../../assets/brooke-cagle-274630-unsplash.jpg';
import blackCoat from '../../assets/paige-muller-352783-unsplash.jpg';

class ShopView extends Component {
    constructor(props){
        super(props);
    }
    //componentDidMount to set inventory
   componentDidMount(){
        axios.get('/api/inventory').then(res=>{
            console.log(res.data)
            this.props.setInventory(res.data)
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
             <div key={i}><ItemCard  itemName={item.itemName} type={item.type} price={item.price} size={item.size} imgUrl={item.imgUrl} id={item.id} /></div>
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


export default withRouter(connect(mapStateToProps, { setInventory })(ShopView));