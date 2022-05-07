import React, { Component } from 'react';
import './styles/logOutButton.css';
import { Button } from 'semantic-ui-react';

export default class LogOutButton extends Component {
    render() {
        return (
            <div>
                <Button id="logOutButton">Cerrar Sesión</Button>
            </div>
        )
    }
}
