import './styles/footer.css';
import React, { Component } from 'react';
import image from './imgs/tecMo.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <img src={image} />
            </div>
        );
    }
}