import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className='navBarContainer'>
                <div className='logo'>graceless.</div>
                <div className='navButtons'>
                    <div className='navButton'>home</div>
                    <div className='navButton'>shop</div>
                    <div className='navButton'>about</div>
                    <div className='navButton'>cart</div>
                    <div className='navButton'>login</div>
                </div>
            </div>
        );
    }
}

export default NavBar;