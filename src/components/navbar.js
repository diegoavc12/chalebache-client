import React, { Component } from 'react';
import image from './imgs/logo.png';
import './styles/navbar.css';
import TutorialModal from './tutorialModal';
import AdminButton from './adminButton';
import { Button } from 'semantic-ui-react';

export default class navbar extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <img className="" src={image} />
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