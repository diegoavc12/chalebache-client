import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import LineChart from './customShapeBarChart';
import PieChart from './pieChart';
import AreaChart from './customStackedAreaChart';
import './styles/menu.css';
// import LineChart from './lineChart';

export default class MenuExampleTabularOnLeft extends Component {
    constructor() {
        super();
        this.state = {
            activeItem: "top",
            showHideDemo1: true,
            showHideDemo2: false,
            showHideDemo3: false
        };
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    state = { activeItem: 'top' }
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        switch (name) {
            case "Top Baches":
                this.setState({ showHideDemo1: true, showHideDemo2: false, showHideDemo3: false });
                break;
            case "Clasificacion":
                this.setState({ showHideDemo1: false, showHideDemo2: true, showHideDemo3: false });
                break;
            case "Fecha":
                this.setState({ showHideDemo1: false, showHideDemo2: false, showHideDemo3: true });
                break;
        }
    }
    render() {
        const { activeItem } = this.state
        const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
        return (
            <Grid id='grid'>
                <Grid.Column className='menuGrid' width={3}>
                    <Menu id='menu' fluid vertical tabular size={"massive"}>
                        <Menu.Item id='top' class='active'
                            name='Top Baches'
                            active={activeItem === 'Top Baches'}
                            onClick={this.handleItemClick}
                        />
                        <br />
                        <Menu.Item id='class' class='active'
                            name= 'Clasificacion'
                            active={activeItem === 'Clasificacion'}
                            onClick={this.handleItemClick}
                        />
                        <br />
                        <Menu.Item id='fecha' class='active'
                            name='Fecha'
                            active={activeItem === 'Fecha'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </Grid.Column>
                <Grid.Column stretched width={12}>
                    <h2>Gr&#225;ficos</h2>
                    <Segment id='segmentChart'>
                        {showHideDemo2 && <PieChart />}
                        {showHideDemo1 && <LineChart />}
                        {showHideDemo3 && <AreaChart />}
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}