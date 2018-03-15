import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setFeatured} from '../../ducks/inventory'
import './HomeView.css';
import ItemCard from '../ItemCard/ItemCard'


class HomeView extends Component {
       componentDidMount(){
        axios.get('/api/inventory').then(res=>{
            console.log(res.data);
            this.props.setFeatured(res.data);
        }).catch(console.log)
    }
    render() {
        console.log(this.props)
        let featuredItems = this.props.inventory.featured.map((item,i)=>(
            <div key={i}><ItemCard  itemName={item.itemName} type={item.type} price={item.price} size={item.size} imgUrl={item.imgUrl} id={item.id} description={item.description} /></div>
       ));
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
                    {featuredItems}
                    </div>

                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => state;


export default withRouter(connect(mapStateToProps, { setFeatured })(HomeView));