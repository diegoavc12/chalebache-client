import React, { Component } from 'react';
import image from './imgs/logo.png';
import './styles/navbar.css';
import LogOutButton from './logOutButton.js';

export default class navbarAdmin extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <img className="" src={image} />
                    <h1>ChaleBache</h1>
                    <div id='navbarButtons'>
                        <a href='/'>
                            <LogOutButton />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}