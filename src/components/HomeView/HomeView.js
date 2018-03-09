import React, { Component } from 'react';
import './HomeView.css';
import ItemCard from '../ItemCard/ItemCard'
import brownShirt from '../../assets/ao-275953-unsplash.jpg';
import jeans from '../../assets/jamakassi-364678-unsplash.jpg';
import jorts from '../../assets/brooke-cagle-274630-unsplash.jpg';

class HomeView extends Component {
    render() {
        return (
            <div className='homeContainer'>
                <div className='heroImg'>
                    <div className='heroMain'>graceless</div>
                    <div className='heroSub'>vintage goods</div>
                </div>
                <div className='featuredContainer'>
                    <div className='featuredHead'>
                        Featured Items 
                    </div>
                    <div className='featuredCards'>
                    <ItemCard imgURL={brownShirt} itemName='Silk Button-Up'/>
                    <ItemCard imgURL={jorts} itemName="90's Cutoffs"/>
                    <ItemCard imgURL={jeans} itemName="Distressed Jeans"/>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default HomeView;