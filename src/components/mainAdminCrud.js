import React, { Component } from 'react'
import Test from './test';
import Map from './map';
import BacheCRUD from './bachelogs';
import Searchbar from './searchbar';
import AdminButton from './logoffButton';
import Navbar from './navbarAdmin';
import Footer from './footer';
import LineChart from './lineChart';
import DonutChart from './donutChart';
import Dashboard from './dashBoard';
import { BacheProvider } from './bacheContext';


export default class MainAdminCRUD extends Component {
    render() {
        return (
            <div>
                
                {/* <div className="headE">
                    <Searchbar id ="searchsito"></Searchbar>
                    <Test id="testsito"></Test>
                    <AdminButton id="adminsito"></AdminButton>
                </div> */}
                <Navbar/>
                <br />
                
                <div className="wrapper">
                    <BacheProvider>
                    <Map class="l"/>
                    <BacheCRUD name="x" location="1,2" seriedad="10" className="infos"/>
                    </BacheProvider>
                    
                </div>

                {/* <div className="dashboard">
                    <h2>LineChart</h2>
                    <LineChart></LineChart>
                    <DonutChart></DonutChart>
                    
                </div> */}
                <Footer></Footer> 
            </div>
        )
    }
}
