import React, { Component } from 'react';
import './ShopView.css';
import ItemCard from '../ItemCard/ItemCard';
import brownShirt from '../../assets/ao-275953-unsplash.jpg';
import sweater from '../../assets/beth-solano-321063-unsplash.jpg';
import denimJ from '../../assets/toa-heftiba-547030-unsplash.jpg';
import jeans from '../../assets/jamakassi-364678-unsplash.jpg';
import jorts from '../../assets/brooke-cagle-274630-unsplash.jpg';
import blackCoat from '../../assets/paige-muller-352783-unsplash.jpg';

class ShopView extends Component {
    render() {
        return (
            <div className='shopContainer'>
                <div className='lazyDiv' description='i make it so that the navbar/footer doesnt cover anything'></div>
                <div>SHOP</div>
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
                <ItemCard imgURL={brownShirt} itemName='Silk Button-Up'/>
                <ItemCard imgURL={jorts} itemName="90's Cutoffs"/>
                <ItemCard imgURL={jeans} itemName="Distressed Jeans"/>
                <ItemCard imgURL={denimJ} itemName='Denim Jacket'/>
                <ItemCard imgURL={blackCoat} itemName="Black Coat"/>
                <ItemCard imgURL={sweater} itemName="Sweater"/>
                </div>
                <div className='lazyDiv' description='i make it so that the navbar/footer doesnt cover anything'></div>
            </div>
        );
    }
}

export default ShopView;