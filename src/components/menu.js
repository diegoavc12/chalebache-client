import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import LineChart from './customShapeBarChart';
import PieChart from './pieChart'
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
  state = { activeItem: 'top'}

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name  })
      switch (name) {
      case "top":
        this.setState({ showHideDemo1: true, showHideDemo2: false });
        break;
      case "Categories":
        this.setState({ showHideDemo1: false, showHideDemo2: true });
        break;
      case "companies":
        this.setState({ showHideDemo1: false, showHideDemo2: false });
        break;
    }
    }

  render() {
    const { activeItem } = this.state
    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
    return (
      <Grid>
        <Grid.Column width={3}>
          <Menu fluid vertical tabular size={"massive"}>
            <Menu.Item
              name='top'
              active={activeItem === 'top'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Categories'
              active={activeItem === 'Categories'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}> 
        <h2>Charts</h2>
           <Segment  >
             { showHideDemo2 && <PieChart/>}
             { showHideDemo1 && <LineChart/>}
           </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
