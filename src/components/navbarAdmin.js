import React, { Component } from 'react'
import image from './imgs/logo.png';
import './styles/navbar.css'

export default class navbar extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <img className="" src={image}/>
                    <h2>ChaleBache</h2>
                    <a className="active" href="/">Log Out</a>
                </div>
            </div>
        );
    }

}