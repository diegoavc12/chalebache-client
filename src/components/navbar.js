import React, { Component } from 'react'
import Searchbar from './searchbar';
import Test from './test';
import image from './imgs/logo.png';
import './styles/navbar.css'

export default class navbar extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <img className="" src={image}/>
                    <h2>ChaleBache</h2>
                    <a className="active" href="/login">Admin</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                     <Searchbar className="searchBar" ></Searchbar>
                    {/* <input type="text" placeholder="Search.."/> */}
                </div>
                
            </div>
        );
    }

}
