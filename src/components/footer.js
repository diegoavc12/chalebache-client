import './styles/footer.css'
import React, { Component } from 'react';
import image from './imgs/TecMo.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <img src={image} />
            </div>
        );
    }

}