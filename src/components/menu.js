import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import LineChart from './customShapeBarChart';
import PieChart from './pieChart';
import './styles/menu.css';

export default class MenuExampleTabularOnLeft extends Component {
    constructor() {
        super();
        this.state = {
            activeItem: "top",
            showHideDemo1: true,
            showHideDemo2: false,
        };
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    state = { activeItem: 'top' }
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        switch (name) {
            case "Top Baches":
                this.setState({ showHideDemo1: true, showHideDemo2: false });
                break;
            case "Agrupamiento":
                this.setState({ showHideDemo1: false, showHideDemo2: true });
                break;
        }
    }
    render() {
        const { activeItem } = this.state
        const { showHideDemo1, showHideDemo2 } = this.state;
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
                            name= 'Agrupamiento'
                            active={activeItem === 'Agrupamiento'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </Grid.Column>
                <Grid.Column stretched width={12}>
                    <h2>Gr&#225;ficos</h2>
                    <Segment id='segmentChart'>
                        {showHideDemo2 && <PieChart />}
                        {showHideDemo1 && <LineChart />}
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}