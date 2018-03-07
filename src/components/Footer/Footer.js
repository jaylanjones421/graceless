import React, { Component } from 'react';
import './Footer.css';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/lib/fa';

class Footer extends Component {
    render() {
        return (
            <div className='footerContainer'>
                <div className='socialContainer'><FaFacebook size={30} className='social'/></div>
                <div className='socialContainer'><FaInstagram size={30} className='social'/></div>
                <div className='socialContainer'><FaTwitter size={30} className='social'/></div>               
            </div>
        );
    }
}

export default Footer;