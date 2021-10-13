import React, { Component, useEffect} from 'react'
import './styles/dashboard.css'
import * as d3 from 'd3'
const colors = [ '#8ce8ad', '#57e188', '#34c768', '#2db757', '#27acaa', '#42c9c2', '#60e6e1', '#93f0e6', '#87d3f2', '#4ebeeb', '#35a4e8', '#188ce5', '#542ea5', '#724bc3', '#9c82d4', '#c981b2', '#b14891', '#ff6d00', '#ff810a', '#ff9831', '#ffb46a', '#ff9a91', '#ff736a', '#f95d54', '#ff4136', '#c4c4cd' ];

const data = [
    {year: 1980, efficiency: 24.3, sales: 8949000},
    {year: 1985, efficiency: 27.6, sales: 10979000},
    {year: 1990, efficiency: 28, sales: 9303000},
    {year: 1991, efficiency: 28.4, sales: 8185000},
    {year: 1992, efficiency: 27.9, sales: 8213000},
    {year: 1993, efficiency: 28.4, sales: 8518000},
    {year: 1994, efficiency: 28.3, sales: 8991000},
    {year: 1995, efficiency: 28.6, sales: 8620000},
    {year: 1996, efficiency: 28.5, sales: 8479000},
    {year: 1997, efficiency: 28.7, sales: 8217000},
    {year: 1998, efficiency: 28.8, sales: 8085000},
    {year: 1999, efficiency: 28.3, sales: 8638000},
    {year: 2000, efficiency: 28.5, sales: 8778000},
    {year: 2001, efficiency: 28.8, sales: 8352000},
    {year: 2002, efficiency: 29, sales: 8042000},
    {year: 2003, efficiency: 29.5, sales: 7556000},
    {year: 2004, efficiency: 29.5, sales: 7483000},
    {year: 2005, efficiency: 30.3, sales: 7660000},
    {year: 2006, efficiency: 30.1, sales: 7762000},
    {year: 2007, efficiency: 31.2, sales: 7562000},
    {year: 2008, efficiency: 31.5, sales: 6769000},
    {year: 2009, efficiency: 32.9, sales: 5402000},
    {year: 2010, efficiency: 33.9, sales: 5636000},
    {year: 2011, efficiency: 33.1, sales: 6093000},
    {year: 2012, efficiency: 35.3, sales: 7245000},
    {year: 2013, efficiency: 36.4, sales: 7586000},
    {year: 2014, efficiency: 36.5, sales: 7708000},
    {year: 2015, efficiency: 37.2, sales: 7517000},
    {year: 2016, efficiency: 37.7, sales: 6873000},
    {year: 2017, efficiency: 39.4, sales: 6081000},
  ]

  const donutData = [
    {name: "<5", value: 19},
    {name: "5-9", value: 20},
    {name: "10-14", value: 19},
    {name: "15-19", value: 24},
    {name: "20-24", value: 22},
    {name: "25-29", value: 29},
    {name: "30-34", value: 22},
    {name: "35-39", value: 18},
    {name: "40-44", value: 23},
    {name: "45-49", value: 19},
    {name: "50-54", value: 16},
    {name: "55-59", value: 19},
    {name: "60-64", value: 28},
    {name: "65-69", value: 17},
    {name: "70-74", value: 20},
    {name: "75-79", value: 17},
    {name: "80-84", value: 18},
    {name: "≥85", value: 21}
   ]

export default class Dashboard extends Component {
    render() {
        return (
           

            <div>
                <div className="title">Dashboard</div>
                

                
                       <div class="container" id="chart1" > 
                  <BarChart data={data} />
                     </div>
                     <div class="container" id="chart2">
                   <DonutChart data={donutData}  />
                     </div>
                
                    
            </div>
            
        )
    }
}
  
export const useD3 = (renderChartFn, dependencies) => {
    const ref = React.useRef();

    React.useEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => {};
      }, dependencies);
    return ref;
}
function BarChart({ data }) {
    const ref = useD3(
      (svg) => {
        const height = 500;
        const width = 500;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  
        const x = d3
          .scaleBand()
          .domain(data.map((d) => d.year))
          .rangeRound([margin.left, width - margin.right])
          .padding(0.1);
  
        const y1 = d3
          .scaleLinear()
          .domain([0, d3.max(data, (d) => d.sales)])
          .rangeRound([height - margin.bottom, margin.top]);
  
        const xAxis = (g) =>
          g.attr("transform", `translate(0,${height - margin.bottom})`).call(
            d3
              .axisBottom(x)
              .tickValues(
                d3
                  .ticks(...d3.extent(x.domain()), width / 40)
                  .filter((v) => x(v) !== undefined)
              )
              .tickSizeOuter(0)
          );
  
        const y1Axis = (g) =>
          g
            .attr("transform", `translate(${margin.left},0)`)
            .style("color", "steelblue")
            .call(d3.axisLeft(y1).ticks(null, "s"))
            .call((g) => g.select(".domain").remove())
            .call((g) =>
              g
                .append("text")
                .attr("x", -margin.left)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text(data.y1)
            );
  
        svg.select(".x-axis").call(xAxis);
        svg.select(".y-axis").call(y1Axis);
  
        svg
          .select(".plot-area")
          .attr("fill", "steelblue")
          .selectAll(".bar")
          .data(data)
          .join("rect")
          .attr("class", "bar")
          .attr("x", (d) => x(d.year))
          .attr("width", x.bandwidth())
          .attr("y", (d) => y1(d.sales))
          .attr("height", (d) => y1(0) - y1(d.sales));
      },
      [data.length]
    );
  
    return (
      <svg
        ref={ref}
        style={{
          height: 500,
          width: "100%",
          marginRight: "0px",
          marginLeft: "0px",
        }}
      >
        <g className="plot-area" />
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    );
  }

class DonutChart extends Component {

    constructor(props) {
        super(props);
        this.chRef = React.createRef();
    }


    // Chart load after component Mount
    componentDidMount() {
        this.drawChart()
    }


    // DrawChart 
    drawChart(){
        const {data } = this.props;
        const svgContainer = d3.select(this.chRef.current).node();
        const width  = 500;
        const height = width;
        const margin = 15;
        let radius = Math.min(width, height) / 2  - margin;
        // legend Position
        let legendPosition = d3.arc().innerRadius(radius/1.75).outerRadius(radius);

        // Create SVG
        const svg  = d3.select(this.chRef.current)
        .append('svg')
        .attr("width", '100%')
        .attr("height", '100%')
            .attr('viewBox', '0 0 ' + width + ' ' + width )
        //.attr('preserveAspectRatio','xMinYMin')
        .append("g")
        .attr("transform", "translate(" + Math.min(width,height) / 2 + "," + Math.min(width,height) / 2 + ")");

        let pie = d3.pie()
            .value( d => d.value )
        let data_ready = pie(data)

        // Donut partition  
        svg
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
            .innerRadius(radius/ 1.75)  // This is the size of the donut hole
            .outerRadius(radius)
        )
        .attr('fill',  (d) =>  colors[d.index] )
        .attr("stroke", "#fff")
        .style("stroke-width", "2")
        .style("opacity", "0.8")


      // Legend group and legend name 
       svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('g')
        .attr("transform", d => `translate(${legendPosition.centroid(d)})`)
        .attr("class", 'legend-g')
        .style("user-select", "none")
        .append('text')
        .text(d =>  d.data.name)
        .style("text-anchor", "middle")
        .style("font-weight", 700)
        .style("fill", '#222')
        .style("font-size", 14);

       //Label for value
        svg
        .selectAll('.legend-g')
        .append('text')
        .text((d)=>{ return  d.data.value})
        .style("fill", '#444')
        .style("font-size", 12)
        .style("text-anchor", "middle")
        .attr("y", 16 );
    }



    render() {
        return <>
            <div ref={this.chRef}></div> </>
    }


}