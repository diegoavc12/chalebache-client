import './styles/footerAdmin.css';
import React, { Component } from 'react';
import image from './imgs/tecMo.png';

export default class FooterAdmin extends Component {
    render() {
        return (
            <div className="footerAdmin">
                <img src={image} />
            </div>
        );
    }
}