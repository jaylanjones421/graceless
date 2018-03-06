import React, { Component } from 'react';
import './Footer.css';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/lib/fa';

class Footer extends Component {
    render() {
        return (
            <div className='footerContainer'>
                <div><FaFacebook size={30} /></div>
                <div><FaInstagram size={30}/></div>
                <div><FaTwitter size={30}/></div>
                
            </div>
        );
    }
}

export default Footer;