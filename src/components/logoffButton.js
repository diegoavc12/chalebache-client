import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import './styles/adminButton.css'


export default class Logoffbutton extends Component {
    render() {
        return (
            <div style={{'display':'flex', 'flexDirection':'row-reverse', 'alignItems': 'center'}}>
                <Link to='/'>
                <button id="adminButtonsito" >Cerrar Sesión</button>
                </Link>
            </div>
        )
    }
}

