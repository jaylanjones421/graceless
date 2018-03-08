import React, { Component } from 'react';
import OrderCard from '../OrderCard/OrderCard'

import './CartView.css'
import {FaQuoteRight, FaQuoteLeft} from 'react-icons/lib/fa';


class Cart extends Component {
    render() {
        return (
            <div className='cartContainer'>
                <div className='lazyDiv'></div>
                <h2>Cart</h2>
                <div className='top'>
                    <div className='cartDetails'>
                        {/*this will have generated ordercards*/}
                        <OrderCard/>
                    </div>
                    <div className='cartOverview'>
                        Order Summary
                        {/*this div will sum up the order*/}
                        {/*think i should make another component for these :/ */}
                    </div>
                </div>
                <div className='bottom'>
                    <div className='thanks'>
                        <FaQuoteLeft/>
                            <div>This is something that says how much it means to us that you are making a home for our vintage finds, we hope you love it as much as we do. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et pariatur fugit, cum inventore voluptatibus perspiciatis quae nulla, eaque cupiditate, quasi qui id mollitia magni ipsa ducimus neque animi iste repellat?</div>
                        <FaQuoteRight/>
                    </div>
                </div>
                <div className='lazyDiv'></div>
            </div>
        );
    }
}

export default Cart;