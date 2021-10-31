import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
/*
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
*/


export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';
  state = { data: null, newData: null}
  data=null

  componentDidMount() {
    this.getDataAPI()
    console.log("Datos obtenidos")
}

async getDataAPI() {
    const data = await fetch("http://129.146.169.60:1441/api/potholes")
    const potholes = await data.json()
    console.log(potholes)
    Object.entries(potholes).forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        value["firstIncident1"] =new Date(value["firstIncident"]);
       value["lastIncident1"] = new Date(value["lastIncident"]);
       // var bigInt = require("big-integer");
       // value["firstIncident2"] = bi(value["firstIncident"].substring(0,3) + value["firstIncident"].substring(5,6) + value["firstIncident"].substring(8,9))
       // value["lastIncident2"] = parseFloat(value["lastIncident"].substring(0,3) + value["lastIncident"].substring(5,6) + value["lastIncident"].substring(8,9))
       var time_difference =  value["firstIncident1"].getTime() - value["lastIncident1"].getTime();  
  
       //calculate days difference by dividing total milliseconds in a day  
       var days_difference = time_difference / (1000 * 60 * 60 * 24);  
   
       value["daysBetweenFirstLastIncident"] = days_difference;

    });
    this.data=potholes
    this.setState({ data: potholes  })
    console.log(this.data)
    
}

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={700}
          height={1000}
          data={this.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip />
          <Area type="monotone" dataKey="daysBetweenFirstLastIncident" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}