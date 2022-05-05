import React, { Component } from 'react';
import './styles/adminButton.css';
import { Button } from 'semantic-ui-react';

export default class AdminButton extends Component {
    render() {
        return (
            <div>
                <Button id='adminButton'>Admin</Button>
            </div>
         )
    }
}