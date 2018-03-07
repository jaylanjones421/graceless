import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className='navBarContainer'>
                <div className='logo'>graceless</div>
                <div className='navButtons'>
                   <Link to='/'> <div className='navButton'>home</div></Link>
                   <Link to='/shop'> <div className='navButton'>shop</div></Link>
                   <Link to='/about'> <div className='navButton'>about</div></Link>
                   <Link to='/cart'> <div className='navButton'>cart</div></Link>
                   <Link to='/auth'> <div className='navButton'>login</div></Link>
                </div>
            </div>
        );
    }
}

export default NavBar;