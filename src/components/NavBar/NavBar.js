import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className='navBarContainer'>
                <Link to='/'><div className='logo'>graceless</div></Link>
                <div className='navButtons'>
                   <Link to='/'> <div className='navButton'>home</div></Link>
                   <Link to='/shop'> <div className='navButton'>shop</div></Link>
                   <Link to='/about'> <div className='navButton'>about</div></Link>
                   <Link to='/cart'> <div className='navButton'>cart</div></Link>
                   <a href="http://localhost:3001/login"> <div className='navButton'>login</div></a>
                </div>
            </div>
        );
    }
}

export default NavBar;