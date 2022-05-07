import React, { useContext, useState, useEffect } from 'react';
import { BacheContext } from './bacheContext';
import { Grid, Segment } from 'semantic-ui-react';
import Modal from './modalCRUD';
import './styles/info.css';
import './styles/crud.css';
import axios from 'axios';

function BacheCRUD() {
    const { bache } = useContext(BacheContext)
    return (
        <React.Fragment>
            <Grid.Column>
                <Segment color="black">
                    <h3>Id</h3>
                    <h5>{bache.id}</h5>
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment color="black">
                    <h3>Fecha de detección</h3>
                    <h5>{bache.firstIncident}</h5>
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment color="black">
                    <h3>Ultimo incidente</h3>
                    <h5>{bache.lastIncident}</h5>
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment color="black">
                    <h3>Incidentes</h3>
                    <h5>{bache.numIncidents}</h5>
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Modal />
            </Grid.Column>
        </React.Fragment>
    )
}

export default BacheCRUD