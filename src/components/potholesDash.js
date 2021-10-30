import React from 'react'
import PotholesList from './potholesList'
import Menu from './menu'
import List from './topBaches'
import { Grid } from 'semantic-ui-react'
import './styles/dashboard.css'

const GridExampleDividedNumber = () => (
  <Grid >
    <Grid.Row>
      <Grid.Column>
        <List/>
      </Grid.Column>
    </Grid.Row>
        {/* <Grid.Row>
      <Grid.Column>
        <Segment><h1>HeatMap Chart</h1></Segment>
      </Grid.Column>
    </Grid.Row> */}
    <Grid.Row>
      <Grid.Column>
          <PotholesList/>
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