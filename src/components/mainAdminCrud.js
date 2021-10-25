import React, { Component } from 'react'
import Test from './test';
import Map from './map';
import BacheCRUD from './bachelogs';
import Navbar from './navbarAdmin';
import Searchbar from './searchbar';
import AdminButton from './logoffButton';
import Footer from './footer';
import LineChart from './lineChart';
import DonutChart from './donutChart';
import Dashboard from './dashBoard';
import PotholesList from './potholesList'
import PotholesDash from './potholesDash'
import { Icon, List } from 'semantic-ui-react'
import { BacheProvider } from './bacheContext';
import './styles/dashboard.css'


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
                <br />
                <br />
                <PotholesDash className="grid"/>
                {/* <div className="dashboard">
                    <h2>LineChart</h2>
                    <LineChart></LineChart>
                    <DonutChart></DonutChart>
                    
                </div> */}
                {/* <Footer></Footer>  */}
            </div>
        )
    }
}
