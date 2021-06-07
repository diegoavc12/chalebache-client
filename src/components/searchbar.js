import React, { Component } from 'react'
import './styles/searchBar.css'

export default class searchbar extends Component {
    render() {
        return (
            <div className="searchSin">
                <input type="text" id="location" name="locaMap" placeholder="Busca una ubicación"></input>
            </div>
        )
    }
}
