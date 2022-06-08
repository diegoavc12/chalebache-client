import React, { Component } from 'react';
import image from './imgs/logo.png';
import './styles/navbar.css';
import TutorialModal from './tutorialModal.js';
import AdminButton from './adminButton.js';
import { Button } from 'semantic-ui-react';

export default class navbar extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <img src={image} />
                    <h1>ChaleBache</h1>
                    <div id='navbarButtons'>
                        <Button.Group>
                            <a href='/login'>
                                <AdminButton />
                            </a>
                            <Button.Or />
                            <TutorialModal />
                        </Button.Group>
                    </div>
                </div>
            </div>
        );
    }
}