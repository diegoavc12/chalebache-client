import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import './styles/adminButton.css'


export default class AdminButton extends Component {
    render() {
        return (
            <div style={{'display':'flex', 'flexDirection':'row-reverse', 'alignItems': 'center'}}>
                <Link to='/login'>
                <button id="adminButtonsito" >Administrador</button>
                </Link>
                
            </div>
        )
    }
}
