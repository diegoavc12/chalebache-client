import React from 'react';
import PotholesList from './potholesList.js';
import Menu from './menu.js';
import List from './topBaches.js';
import { Grid, Segment } from 'semantic-ui-react';

const GridExampleDividedNumber = () => (
    <Grid >
        <Grid.Row>
            <Grid.Column>
                <List />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <PotholesList />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Menu></Menu>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default GridExampleDividedNumber