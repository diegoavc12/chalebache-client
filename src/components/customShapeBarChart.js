import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
const colors = scaleOrdinal(schemeCategory10).range();



const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';
  state = { data: null, newData: null}
  data=null

 componentDidMount() {
     this.getDataAPI()
 }

async getDataAPI() {
     const data = await fetch("http://129.146.169.60:1441/api/potholes")
     const potholes = await data.json()
     this.data=potholes
     this.setState({ data: potholes  })

}


  render() {
    return (
      <ResponsiveContainer width={1000} height={550}>
        <BarChart
          width={700}
          height={1000}
          data={this.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="numIncidents" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {/* {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))} */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
