import React, { useContext } from 'react'
import { BacheContext } from './bacheContext'
import { Grid, Segment} from 'semantic-ui-react'
import './styles/info.css'

function BacheInfo () {
    const { bache } = useContext(BacheContext)
    return (
        <React.Fragment>
            <Grid.Column>
                <Segment  color="black">
                    <h3>Nombre</h3>
                    <h5>{bache.name}</h5>
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
        </React.Fragment>    
    )
}

export default BacheInfo
