import React, { Component } from 'react'
import Test from './test';
import Map from './map';
import BacheCRUD from './bachelogs';
import Searchbar from './searchbar';
import AdminButton from './logoffButton';
import Navbar from './navbarAdmin';
import Footer from './footer';
import Dashboard from './graphicsDashboard';
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
                
            <div>
                 <Navbar></Navbar>
            </div>

            <br />
            
                <div className="wrapper">
                    <BacheProvider>
                    <Map class="l"/>
                    <BacheCRUD name="x" location="1,2" seriedad="10" className="infos"/>


                    </BacheProvider>

                    
                </div>
                <div >

                    <Dashboard></Dashboard>
                    </div>
                    <div>
                    <Footer></Footer> 
                    </div>
                   
            </div>
            
        )
    }
}
